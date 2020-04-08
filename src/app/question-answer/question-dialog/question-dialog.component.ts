import {Component, OnInit} from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {

  questionForm: FormGroup;
  categories: any;
  createQuestion() {
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      title: new FormControl(null, {validators: Validators.required}),
      desc: new FormControl(null, {validators: Validators.required}),
      service: new FormControl(null, {validators: Validators.required}),
    });
  }
}
