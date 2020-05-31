package server

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/northwestern-omega-delta-phi/aa-official-website/server/config"
	"github.com/northwestern-omega-delta-phi/aa-official-website/server/server/static"
)

func New(cfg config.Cfg) (*http.Server, error) {
	r := gin.Default()

	// if we ever wanted to make requests to a 3rd party API:
	// dt := http.DefaultTransport
	// googleCalendar.Register(r, cfg.GoogleCalanderUrl, dt)

	static.Register(r)

	srv := http.Server{
		Addr:         cfg.ListenAddress,
		Handler:      r,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	return &srv, nil
}

type Shutdowner interface {
	Shutdown(context.Context) error
}

func GracefulShutdown(svcs ...Shutdowner) {
	// based on https://github.com/gin-gonic/examples/blob/master/graceful-shutdown/graceful-shutdown/server.go

	// Wait for interrupt signal to gracefully shutdown the server with
	// a timeout of 5 seconds.
	quit := make(chan os.Signal, 1)
	// kill (no param) default send syscall.SIGTERM
	// kill -2 is syscall.SIGINT
	// kill -9 is syscall.SIGKILL but can't be catch, so don't need add it
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutdown Server ...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	wg := sync.WaitGroup{}
	for _, svc := range svcs {
		wg.Add(1)
		go func() {
			defer wg.Done()
			if err := svc.Shutdown(ctx); err != nil {
				log.Fatal("Service Shutdown: ", err)
			}
		}()
	}
	wg.Wait()

	log.Println("Server exiting")
}
