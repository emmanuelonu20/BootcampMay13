import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Istudent[] = [
    {id: 1, name: 'John Wick', country: 'US', email: 'john@gmail.com'},
    {id: 2, name: 'Jennifer Lopez', country: 'Canada', email: 'lopez@gmail.com'},
    {id: 3, name: 'Victoria Benneth', country: 'US', email: 'victoria@gmail.com'},
  ];

  constructor() { }

  //Returns all students data
  getStudents(){
    return this.students;
  }

  //Return a single student data based on the studentId parameter
  getStudent(studentId: number){
    return this.students.find(stud => {
      return stud.id === studentId;
    })
  }
}
