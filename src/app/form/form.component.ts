import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {NgForm, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор']
  user: User = new User(1, null, null, null)

  formErrors: any = {
    name: '',
    age: ''
  }

  validationMessages: any = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Минимальная длина 2 символа'
    },
    age: {
      required: 'Возраст обязателен'
    }
  }

  @ViewChild('userForm') userForm!: NgForm

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.userForm.valueChanges?.subscribe(data => this.onValueChanged())
  }

  onSubmit(): void {
    console.log('Form submitted')
  }

  private onValueChanged(): void {
    const form = this.userForm.form

    Object.keys(this.formErrors).forEach(field => {
      const control = form.get(field)
      this.formErrors[field] = ''

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field]
        Object.keys(control.errors as ValidationErrors).forEach(key => {
          this.formErrors[field] += messages[key] + ' '
        })
      }
    })
  }
}
