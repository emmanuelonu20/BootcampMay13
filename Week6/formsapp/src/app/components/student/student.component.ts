import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnChanges, OnInit{
 

  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter(); //create a custom event

  onDelete(){
    this.deleteStudentEvent.emit(this.student.id); //trigger the event
  }

  ngOnInit(): void {
    console.log('Component initialized');
  }  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
