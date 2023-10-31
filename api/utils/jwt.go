package utils

import (
	"log"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/joho/godotenv"
)

var jwtSecret []byte

func initJwtSecret() {
	err := godotenv.Load(".env.local")
	if err != nil {
		log.Fatalf("Error loading .env.local file")
	}

	jwtSecret = []byte(os.Getenv("JWT_SECRET"))
}

func GetJwtSecret() []byte {
	if jwtSecret == nil {
		initJwtSecret()
	}

	return jwtSecret
}

func GenerateToken(username string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
		"exp":      time.Now().Add(time.Hour * 72).Unix(),
	})

	return token.SignedString(GetJwtSecret())
}
