import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ISession } from '../index';

import { restrictedWords } from '../index';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.html',
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  ngOnInit() {
    const fields = [
      { model:'name', initVal: '', validators: [Validators.required] }, 
      { model: 'presenter', initVal: '', validators: [Validators.required] },
      { model: 'duration', initVal: '', validators: [Validators.required] }, 
      { model: 'level', initVal: '', validators: [Validators.required] }, 
      { model: 'abstract', initVal: '', validators: [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])] },
    ];

    const formGroup = {};

    fields.forEach(inp => formGroup[inp.model] = new FormControl(inp.initVal, inp.validators));

    Object.assign(this, formGroup);
    
    this.sessionForm = new FormGroup(formGroup);
  }

  saveSession(form) {
    if (form.invalid) return;
    const val = form.value;
    const newSession: ISession = {
      id: Date.now(),
      name: val.name,
      presenter: val.presenter,
      duration: Number(val.duration),
      level: val.level,
      abstract: val.abstract,
      voters: [],
    }

    this.saveNewSession.emit(newSession);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}