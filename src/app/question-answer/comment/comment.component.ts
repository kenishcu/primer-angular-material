import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-question-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  messages: Object[] = [{
    _id: 'asd123sad123123',
    index: 0,
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
    answers: [
      {
        from: 'Teddy',
        photo: 'assets/images/face6.jpg',
        message: 'I hate you so much guys.'
      },
      {
        from: 'Sâu',
        photo: 'assets/images/face6.jpg',
        message: 'I come to fuck you.'
      },
    ]
  }, {
    _id: 'asd123sad123124',
    index: 1,
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
    answers: []
  }, {
    _id: 'asd123sad123125',
    index: 2,
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
    answers: []
  }];

  forms = [];
  listShow = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.messages.forEach(message => {
      if (message['_id']) {
        const show = 'show_' + message['_id'];
        this.listShow[show] = false;
        this.forms.push(new FormGroup({
          comment: new FormControl()
        }));
      }
    });
  }

  showAnswer(item) {
    if (this.listShow[item]) {
      this.listShow[item] = false;
    } else {
      this.listShow[item] = true;
    }
  }
  keyUpEnter(itemId) {
    console.log(itemId);
  }
}
