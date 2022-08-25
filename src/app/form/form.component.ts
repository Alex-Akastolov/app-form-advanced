import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup

  roles: string[] = ['Гость', 'Модератор', 'Администратор']
  user: User = new User(1, null, null, null, null, null)

  formErrors: any = {
    name: '',
    password: '',
    email: '',
    role: '',
    age: ''
  }

  validationMessages: any = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Минимальная длина 2 символа',
      maxlength: 'Максимальная длина 10 символа'
    },
    password: {
      required: 'Пароль обязателен',
      minlength: 'Минимальная длина 6 символов',
      maxlength: 'Максимальная длина 15 символов'
    },
    email: {
      required: 'Email обязателен',
      pattern: 'Неправильный формат email'
    },
    age: {
      required: 'Возраст обязателен',
      pattern: 'Значение должно быть целым числом'
    },
    role: {
      required: 'Роль обязательна'
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    console.log('Form submitted')
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: [this.user.password, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: [this.user.email, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      age: [this.user.age, [Validators.required, Validators.pattern(/^\d+$/)]],
      role: [this.user.role, [Validators.required]]
    })

    this.userForm.valueChanges.subscribe(() => this.onValueChanged())
  }


  private onValueChanged(): void {
    const form = this.userForm

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

// RegExp for Email
//
