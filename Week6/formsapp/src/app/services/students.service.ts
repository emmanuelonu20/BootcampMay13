import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  
  constructor(private httpService: HttpClient) { }

  //Returns all students data
  getStudents(){
    return this.httpService.get<Istudent[]>('http://localhost:3000/students');
  }

  //Return a single student data based on the studentId parameter
  getStudent(studentId: number){
    return this.httpService.get<Istudent>('http://localhost:3000/students/' + studentId);
  }

  deleteStudent(studentId: number){
    return this.httpService.delete<Istudent>('http://localhost:3000/students/' + studentId);
  }

  createStudent(formData: any){
    return this.httpService.post<Istudent>('http://localhost:3000/students', formData);
  }
}
