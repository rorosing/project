import { QuestionComponent } from './../question/question.component';
import { QuizComponent } from './../quiz/quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path : '',
    children: [
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'quiz',
        component: QuizComponent
      }
    
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
