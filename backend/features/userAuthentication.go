// User Authentication with jwt-go: Implement a secure JWT-based authentication system where users login and get a token they
// must then include in their headers for authenticated routes.
package userAuthentication

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

var (
	JWTSecret = []byte("secretkey")
)

type User struct {
	Username string `json:username`
	Password string `json:password`
}

var users = []User{
	{
		Username: "jeff",
		Password: "jeff1234",
	},
}

func GenerateToken(username string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	// immediate assertion i.e the value will be inserted into claims without first breaking it up into claims, ok
	claims := token.Claims.(jwt.MapClaims) // MapClaims converts values in the token to either strings, numbers or timestamps
	// claims are information asserted about a subject which are represented in key value pairs
	claims["username"] = username
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	return token.SignedString(JWTSecret)
}

func VerifyToken(tokenString string) (*jwt.Token, error) {
	// parse decodes header, payload and signature. the callback function does need a secret key in order to return the token and an error as the promised function return type
	return jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// checking the token, if its has been signed using the hmac algorithm set (256, 512 etc.) only if it actually has been signed by the correct alg, we ensure the validity of the token and proceed with the verification
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return JWTSecret, nil
	})
}

func Auth() {
	r := gin.Default()

	r.POST("/login", func(c *gin.Context) {
		var user User
		// bind the body struct of the request to the user variable of type User struct. Struct json signature should match
		// request struct signature
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}
		// this part should be replaced with first, finding the desired user in the db, and only then compare the password and other credentials
		for _, u := range users {
			if user.Username == u.Username && user.Password == u.Password {
				token, err := GenerateToken(user.Username)
				if err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{
						"error": "error generating token",
					})
					return
				}
				c.JSON(http.StatusOK, gin.H{"token": token})
			}
		}
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
	})

	r.GET("/authenticated", func(c *gin.Context) {
		tokenString := c.Request.Header.Get("Authorization")
		token, err := VerifyToken(tokenString)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "Invalid token",
			})
			return
		}
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			// .(string), checks if the value is a string and retrieves it. without using it, username would be of type
			// interface{} which can not be used with string methods
			username := claims["username"].(string)
			c.JSON(http.StatusOK, gin.H{"welcome": username})
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		}
	})

	r.Run()
}
