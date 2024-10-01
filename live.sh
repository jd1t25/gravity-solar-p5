#! /usr/bin/env nix-shell
#! nix-shell -i zsh -p zsh

HOST="127.0.0.1"
PORT="8080"

nohup live-server . --host $HOST --port $PORT --open --hard &
