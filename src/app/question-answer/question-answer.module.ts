import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { QuestionAnswerComponent } from './question-answer.component';
import { QuestionAnswerRoutes } from './question-answer.routing';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuestionAnswerRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    ChartsModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [QuestionAnswerComponent, QuestionDetailComponent,
    QuestionDialogComponent],
  entryComponents: [QuestionDialogComponent],

})

export class QuestionAnswerModule {}
