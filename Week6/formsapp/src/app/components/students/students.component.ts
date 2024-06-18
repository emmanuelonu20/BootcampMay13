import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students: Istudent[];

  //dependency injection
  constructor(private studentService: StudentsService){
    this.students = studentService.getStudents();
  }

}
