import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentformComponent } from './components/studentform/studentform.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'create-student', component: StudentformComponent},
  {path: 'view-student/:student_id', component: StudentDetailsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
