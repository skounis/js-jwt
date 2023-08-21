all:
	cat Makefile

setup: 
	bash setup.sh

demo1: 
	$(MAKE) -s setup
	node demo1.js
	$(MAKE) -s clean

demo2:
	$(MAKE) -s setup
	node demo2.js
	$(MAKE) -s clean

clean: 
	rm work/*