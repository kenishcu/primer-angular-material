import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import {QuestionDialogComponent} from './question-dialog/question-dialog.component';

@Component({
  selector: 'app-widgets',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent {

  constructor(private router: Router,  public dialog: MatDialog) {
  }
  messages: Object[] = [{
    _id: 'asd123sad123123',
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
  }, {
    _id: 'asd123sad123124',
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
  }, {
    _id: 'asd123sad123125',
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
  }];

  // paginator
  pageSize: number;
  pageLength: number;
  pageIndex: number;

  goDetail(item) {
    this.router.navigate(['/question-answer/' , item._id]).then(nav => {
      console.log(nav);
    }, err => {
      console.log(err);
    });
  }
  openAnswerDialog(): void {
    if (true) {
      const dialogRef = this.dialog.open(QuestionDialogComponent, {
        panelClass: 'full-width-dialog',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }
}
