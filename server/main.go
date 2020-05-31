package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/northwestern-omega-delta-phi/aa-official-website/server/config"
	"github.com/northwestern-omega-delta-phi/aa-official-website/server/server"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatal(err)
	}

	// Might want to add a logger here and can integrate a loggin system if wanted

	srv, err := server.New(cfg)
	if err != nil {
		log.Fatal(err)
	}

	go func() {
		fmt.Println("Starting server ", srv)
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	server.GracefulShutdown(srv)
}
