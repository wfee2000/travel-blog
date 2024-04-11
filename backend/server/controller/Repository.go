package controller

import (
	"context"
	"db-queries/entities"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const dbConnectionString string = "mongodb://localhost:27017"

var client *mongo.Client

func InitDbConnection() {

	if client != nil {
		return
	}

	var serverAPI = options.ServerAPI(options.ServerAPIVersion1)
	var opts = options.Client().ApplyURI(dbConnectionString).SetServerAPIOptions(serverAPI)

	client, _ = mongo.Connect(context.TODO(), opts)
}

func GetAllUsers() []entities.BlogUser {

	userCollection := client.Database("test").Collection("users")

	// Define an empty slice to store users
	var users []entities.BlogUser

	// Find all users in the collection
	cursor, err := userCollection.Find(context.Background(), bson.M{})
	if err != nil {
		return nil
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var user entities.BlogUser
		if err := cursor.Decode(&user); err != nil {
			return nil
		}
		users = append(users, user)
	}

	if err := cursor.Err(); err != nil {
		return nil
	}

	return users
}

func InsertUser(user entities.BlogUser) entities.BlogUser {
	userCollection := client.Database("test").Collection("users")

	_, err := userCollection.InsertOne(context.Background(), user)

	if err != nil {
		panic(err)
	}

	return user
}
