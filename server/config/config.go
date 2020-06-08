package config

import (
	"github.com/caarlos0/env/v6"
	"github.com/pkg/errors"
)

type Cfg struct {
	ListenAddress string `env:"LISTEN_ADDRESS" envDefault:":3001"`
}

func Load() (Cfg, error) {
	cfg := Cfg{}
	err := env.Parse(&cfg)

	if err != nil {
		return cfg, errors.Wrap(err, "Error loading configuration")
	}

	return cfg, nil
}
