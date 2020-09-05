#include <iostream>
#include "Student.h"
#include <windows.h>
#include <thread>

int Student::threadID = 1;


int main() {
	while (true) {
		Student student;
		std::thread t2(&Student::take_flask, &student);
		t2.join();
		Sleep(1000);

		if (student.getBartender().getWakeCount() == 3) {
			std::cout << "\t\t\t ***End  of Program***\n";
			system("pause");
			return 0;
		}//end program
	}

	return 1;
}

