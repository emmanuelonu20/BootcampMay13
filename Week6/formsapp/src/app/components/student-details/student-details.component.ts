import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  student!: Istudent;

  constructor(private route: ActivatedRoute, private studentService: StudentsService){
    let studentId = parseInt(route.snapshot.paramMap.get('student_id')!);
    
    studentService.getStudent(studentId).subscribe((result) => {
      this.student = result;
    });
  }

}
