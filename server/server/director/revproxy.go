package director

import (
	"fmt"
	"net/http"
	"net/url"
	"regexp"
	"strings"
)

func Default(origin url.URL, route string) func(*http.Request) {
	return func(req *http.Request) {
		req.Header.Add("X-Forwarded-Host", req.Host)
		req.Header.Add("X-Origin-Host", origin.Host)
		req.Host = origin.Host
		req.URL.Scheme = origin.Scheme
		req.URL.Host = origin.Host

		req.URL.Path = formatForwardedPath(origin.Path, req.URL.Path, route)

		fmt.Printf("Forwarding request: %+v\n", req)
	}
}

func formatForwardedPath(originPath string, requestPath string, route string) string {
	tp := strings.Replace(requestPath, route, "", 1)
	fp := originPath + tp
	re := regexp.MustCompile("/+")
	fp = re.ReplaceAllString(fp, "/")
	return fp
}
