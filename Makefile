CC := gcc
SRC := main.c

all: qjb

qjb:
	$(CC) $(SRC) -lcurl -o $@

help:
	@printf "\033[1;97mqjb makefile\033[0m\n"
	@printf "usage: make [argument]\n\n"
	@printf "arguments:\n"
	@printf "  all      Compile qjb (default argument)\n"
	@printf "  clean    Remove built objects\n"

clean:

fclean: clean
	rm -f qjb