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

	userCollection := client.Database("test").Collection("users")

	// insert TestData

	user1 := entities.BlogUser{Name: "Luka", Username: "Luka_Civic_01", Password: "123456789", Email: "luka@gmail.com"}
	user2 := entities.BlogUser{Name: "Tobi", Username: "Aichingert", Password: "12345678", Email: "tobi@gmail.com"}

	_, err1 := userCollection.InsertOne(context.Background(), user1)
	_, err2 := userCollection.InsertOne(context.Background(), user2)

	if err1 != nil || err2 != nil {
		panic(err1)
		panic(err2)
		return
	}
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

	//defer cursor.Close(context.Background())

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
