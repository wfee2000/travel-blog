package entities

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type BlogUser struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Name     string `json:"name"`
	Email    string `json:"email"`
}

type BlogComment struct {
	CommenterId primitive.ObjectID `json:"commenter_id"`
	Content     string             `json:"content"`
}

type Content struct {
	Type    string `json:"type"`
	Content string `json:"content"`
}

type BlogEntry struct {
	Title           string               `json:"title"`
	Description     string               `json:"description"`
	CreationDate    primitive.DateTime   `json:"creationDate"` // kann vllt string sein
	EditDates       []primitive.DateTime `json:"editDates"`
	ImpressionCount int                  `json:"impressionCount"`
	Contents        []Content            `json:"contents"`
	CommentsAllowed bool                 `json:"commentsAllowed"`
	BlogCategory    string               `json:"blogCategory"`
	AuthorId        primitive.ObjectID   `json:"author_id"`
	Comments        []BlogComment        `json:"comments"`
}
