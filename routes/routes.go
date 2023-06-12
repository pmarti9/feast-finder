package routes

import (
	"feast-finder/controllers"
	"github.com/labstack/echo/v4"
)

func InitializeRoutes() {
	router := echo.New()

	router.GET("/", controllers.Index)

	router.Logger.Fatal(router.Start(":5000"))
}
