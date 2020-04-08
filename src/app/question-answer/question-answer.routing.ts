import { Routes } from '@angular/router';
import { QuestionAnswerComponent } from './question-answer.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

export const QuestionAnswerRoutes: Routes = [
  { path: '', component: QuestionAnswerComponent },
  { path: ':id', component: QuestionDetailComponent },
];
