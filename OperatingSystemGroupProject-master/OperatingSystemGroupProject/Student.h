#pragma once
#include<iostream>
#include<string>
#include"Bartender.h"

static Bartender bartender;//...bartender?

class Student{
private:
	int processID;
	static int threadID;
	int threadIDcount;
	std::string threadState;
	std::string processType;
	int beerAmnt;
	int beerConsumed;//comment
	float TT; //Turn Around Time

public:
	Student() {
		this->processID = 0;
		this->threadIDcount = this->threadID++;
		this->threadState = "Drinking";
		this->processType = "Student";
		this->beerAmnt = 0;
		this->beerConsumed = 0;
		this->TT = 0.0;
	}
	Student(int processID,std::string threadState, std::string processType, int beerAmnt, int beerConsumed) {
		this->processID = processID;
		this->threadIDcount = this->threadID++;
		this->threadState = threadState;
		this->processType = processType;
		this->beerAmnt = beerAmnt;
		this->beerConsumed = beerConsumed;
	}

	void viewThreadState() {
		std::cout << "\t\t ****The Current State of Thread " << this->getThreadID() <<"****" << std::endl;
		std::cout << "Process ID: " << this->processID << std::endl;
		std::cout << "Thread ID: " << this->getThreadID() << std::endl;
		std::cout << "Thread State: " << this->threadState << std::endl;
		std::cout << "Process Type: " << this->processType << std::endl;
		std::cout << "Beer Amount: " << this->beerAmnt << std::endl;
		std::cout << "Bartender Flask Count: " << bartender.getFlaskAmnt() << std::endl;
		std::cout << "Bartender Wake Count: " << bartender.getWakeCount() << std::endl;
	}

	Bartender getBartender() {
		return bartender;
	}

	int getThreadID() {
		return this->threadIDcount;
	}
	void think_and_drink() {
		this->viewThreadState();
	}

	void take_flask() {
		bartender.getAFlask();
		this->think_and_drink();
	}

	void wakeup() {

	}
	
	std::string wait() {

	}
};
