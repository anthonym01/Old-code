#pragma once
#include<iostream>
#include<string>
#include<windows.h>
class Bartender{
private:
	int processID;
	int threadID;
	std::string threadState;
	std::string processType;
	int wakeCount;
	int flask;

public:
	Bartender():wakeCount(1) {
		std::cout << "New Bartender\n";
		this->flask = 50;
		this->processID = 1;
		this->threadID = 1;
		this->threadState = "Awoken";
		this->processType = "Bartender";
	}

	void refill_barrel() {
		if(!this->isEmpty()){ }
		else { 
			std::system("CLS");
			std::cout << "Refilling Barrel";
			for (int i = 0; i < 3; i++) {
				Sleep(1000);
				std::cout << ".";
			}
			this->flask = 50; 
			this->wakeCount++; 
		}
	}

	int getWakeCount() {
		return this->wakeCount;
	}

	void changeWakeState() {

	}

	void showWakeCount() {
		std::cout << this->wakeCount << std::endl;
	}

	bool isEmpty() {
		if (this->flask == 0) { return true; }
		else { return false; }
	}

	void getAFlask() {
		this->refill_barrel();
		this->flask--;
	}

	int getFlaskAmnt() {
		return this->flask;
	}

};


