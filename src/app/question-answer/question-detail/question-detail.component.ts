import {Component} from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent {
  messages: Object[] = [{
    _id: 'asd123sad123123',
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'OK We will take care for each others',
  }, {
    _id: 'asd123sad123124',
    from: 'Trevor Hansen',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
  }, {
    _id: 'asd123sad123125',
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
  }];

  stars: number[] = [1, 2, 3, 4, 5];
}
