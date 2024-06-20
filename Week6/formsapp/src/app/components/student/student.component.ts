import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter(); //create a custom event

  onDelete(){
    this.deleteStudentEvent.emit(this.student.id); //trigger the event
  }

}
