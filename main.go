package main

import (
	"feast-finder/auth"
	"feast-finder/routes"
)

func main() {
	routes.InitializeRoutes()
	auth.KeycloakLogin()
}
