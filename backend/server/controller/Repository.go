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

	userCollection := client.Database("travelBlog").Collection("users")

	var users []entities.BlogUser

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
	userCollection := client.Database("travelBlog").Collection("users")

	userCollection.InsertOne(context.Background(), user)

	return user
}

func GetAllEntries() []entities.BlogEntry {

	entryCollection := client.Database("travelBlog").Collection("entries")

	var entries []entities.BlogEntry

	cursor, err := entryCollection.Find(context.Background(), bson.M{})
	if err != nil {
		return nil
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var entry entities.BlogEntry
		if err := cursor.Decode(&entry); err != nil {
			return nil
		}
		entries = append(entries, entry)
	}

	if err := cursor.Err(); err != nil {
		return nil
	}

	return entries
}

func InsertEntry(entry entities.BlogEntry) entities.BlogEntry {
	entryCollection := client.Database("travelBlog").Collection("entries")

	entryCollection.InsertOne(context.Background(), entry)

	return entry
}

func UpdateViewCount(entry entities.BlogEntry) entities.BlogEntry {
	entryCollection := client.Database("travelBlog").Collection("entries")

	filter := bson.M{"title": entry.Title}

	update := bson.M{"$set": bson.M{"impressionCount": entry.ImpressionCount}}

	entryCollection.UpdateOne(context.Background(), filter, update)

	return entry
}
