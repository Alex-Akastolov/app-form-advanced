import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('user', Validators.required),
    password: new FormControl('123', [Validators.required, Validators.minLength(8)])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form submitted')
  }
}


//
// roles: string[] = ['Гость', 'Модератор', 'Администратор']
// user: User = new User(1, null, null, null)
//
// formErrors: any = {
//   name: '',
//   age: ''
// }
//
// validationMessages: any = {
//   name: {
//     required: 'Имя обязательно',
//     minlength: 'Минимальная длина 2 символа'
//   },
//   age: {
//     required: 'Возраст обязателен'
//   }
// }
//
//

//
// ngAfterViewInit() {
//   this.userForm.valueChanges?.subscribe(data => this.onValueChanged())
// }
//

//
// private onValueChanged(): void {
//   const form = this.userForm.form
//
//   Object.keys(this.formErrors).forEach(field => {
//     const control = form.get(field)
//     this.formErrors[field] = ''
//
//     if (control && control.dirty && control.invalid) {
//       const messages = this.validationMessages[field]
//       Object.keys(control.errors as ValidationErrors).forEach(key => {
//         this.formErrors[field] += messages[key] + ' '
//       })
//     }
//   })
// }
