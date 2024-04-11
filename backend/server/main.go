package main

import (
	"db-queries/controller"
	"db-queries/entities"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)

func main() {
	router := gin.Default()

	router.GET("/getAllUsers", getUsers)
	router.POST("/post", postHello)

	errServer := router.Run(":3333")

	if errors.Is(errServer, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if errServer != nil {
		fmt.Printf("error starting server: %s\n", errServer)
		os.Exit(1)
	}

}

func postHello(context *gin.Context) {
	var item entities.Item
	err := context.BindJSON(&item)

	if err != nil {
		context.AbortWithStatus(http.StatusBadRequest)
		return
	}

	context.IndentedJSON(http.StatusCreated, item)
}

func getUsers(context *gin.Context) {
	controller.InitDbConnection()

	users := controller.GetAllUsers()

	context.IndentedJSON(http.StatusCreated, users)
}
