package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Username     string             `json:"username" bson:"username"`
	PasswordHash string             `json:"-" bson:"passwordHash"`
	Email        string             `json:"email" bson:"email"`
	Role         string             `json:"role" bson:"role"`
	Id           primitive.ObjectID `json:"id" bson:"_id,omitempty"`
}
