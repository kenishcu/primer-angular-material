import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-question-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  messages: Object[] = [{
    _id: 'asd123sad123123',
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
    answers: []
  }, {
    _id: 'asd123sad123124',
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
    answers: []
  }, {
    _id: 'asd123sad123125',
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
    answers: []
  }];

  form: FormGroup;

  ngOnInit(): void {
    this.form =  new FormGroup({
      comment: new FormControl(null, ),
    });
  }
}
