// User Authentication with jwt-go: Implement a secure JWT-based authentication system where users login and get a token they
// must then include in their headers for authenticated routes.
package userAuthentication

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Auth() {
	r := gin.Default()

	r.GET("/authenticate-user", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "user authenticate",
		})
	})

	r.Run()
}
