import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [QuizComponent, QuestionComponent, ]
})
export class AdminModule { }
