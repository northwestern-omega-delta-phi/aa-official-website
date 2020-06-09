package static

import (
	"github.com/gin-gonic/gin"
)

func Register(r *gin.Engine) {
	// assuming that the react build exists one directory
	// above the golang project's executable
	r.Static("", "../build")
	r.NoRoute(func(c *gin.Context) {
		c.Header("Cache-Control", "no-cache")
		c.File("../build/index.html")
	})
}
