FROM golang:1.20-alpine3.16

LABEL authors="parkermartin"

WORKDIR /app

COPY . .

RUN go mod tidy
RUN go get -d -v
RUN CGO_ENABLED=0 GOOS=linux go build -o /feast-finder

EXPOSE 5000

ENTRYPOINT ["/feast-finder"]