package main

import (
	"db-queries/entities"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)

func main() {
	router := gin.Default()

	router.GET("/hello", getHello)
	router.POST("/post", postHello)

	err := router.Run(":3333")

	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
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
func getHello(context *gin.Context) {
	fmt.Printf("got /hello request\n")
	context.String(http.StatusOK, "Hello, HTTP!\n")
}
