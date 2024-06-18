import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentformComponent } from './components/studentform/studentform.component';
import { StudentsComponent } from './components/students/students.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentformComponent,
    StudentsComponent,
    NotfoundComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
