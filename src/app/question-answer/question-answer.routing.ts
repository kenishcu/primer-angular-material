import { Routes } from '@angular/router';
import { QuestionAnswerComponent } from './list/question-answer.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import {CommentComponent} from './comment/comment.component';

export const QuestionAnswerRoutes: Routes = [
  { path: 'main', component: QuestionAnswerComponent },
  { path: 'main/:id', component: QuestionDetailComponent },
  { path: 'comment', component: CommentComponent },
];
