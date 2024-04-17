package main

import (
	"db-queries/controller"
	"db-queries/entities"
	"errors"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"time"
)

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "GET", "POST"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://lcoalhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	router.GET("/api/getAllUsers", getUsers)
	router.POST("/api/createUser", postUser)

	router.GET("/api/getAllEntries", getEntries)
	router.POST("/api/createEntry", postEntry)

	router.POST("/api/updateViewCount", updateViewCount)

	errServer := router.Run(":3333")

	if errors.Is(errServer, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if errServer != nil {
		fmt.Printf("error starting server: %s\n", errServer)
		os.Exit(1)
	}
}

func postUser(context *gin.Context) {
	controller.InitDbConnection()

	var user entities.BlogUser
	err := context.BindJSON(&user)

	if err != nil {
		context.AbortWithStatus(http.StatusBadRequest)
		return
	}

	fmt.Println(user.Name)
	fmt.Println(user.Email)

	context.IndentedJSON(http.StatusCreated, controller.InsertUser(user))
}

func getUsers(context *gin.Context) {
	controller.InitDbConnection()

	users := controller.GetAllUsers()

	context.IndentedJSON(http.StatusCreated, users)
}

func postEntry(context *gin.Context) {
	controller.InitDbConnection()

	var entry entities.BlogEntry
	err := context.BindJSON(&entry)

	if err != nil {
		context.AbortWithStatus(http.StatusBadRequest)
		return
	}

	context.IndentedJSON(http.StatusCreated, controller.InsertEntry(entry))
}

func getEntries(context *gin.Context) {
	controller.InitDbConnection()

	entries := controller.GetAllEntries()

	context.IndentedJSON(http.StatusCreated, entries)
}

func updateViewCount(context *gin.Context) {
	controller.InitDbConnection()

	var entry entities.BlogEntry
	err := context.BindJSON(&entry)

	if err != nil {
		context.AbortWithStatus(http.StatusBadRequest)
		return
	}

	context.IndentedJSON(http.StatusCreated, controller.UpdateViewCount(entry))
}
