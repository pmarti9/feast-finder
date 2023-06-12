package controllers

import (
	"feast-finder/auth"
)

func Auth() {

	auth.KeycloakLogin()
}
