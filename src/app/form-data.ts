export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  role: 'Роль',
  site: 'Сайт',
  age: 'Возраст'
}

export const FORM_PLACEHOLDERS = {
  name: 'Введите Логин...',
  password: 'Введите Пароль...',
  email: 'Введите Email...',
  role: 'Укажите Роль...',
  site: 'Введите адрес сайта...',
  age: 'Укажите Возраст...'
}

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  role: '',
  site: '',
  age: ''
}

export const FORM_SUCCESS = {
  name: 'Принято',
  password: 'Принято',
  email: 'Принято',
  role: 'Принято',
  site: 'Принято',
  age: 'Принято'
}

export const VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Минимальная длина 2 символа',
    maxlength: 'Максимальная длина 10 символов'
  },
  password: {
    required: 'Пароль обязателен',
    minlength: 'Минимальная длина 6 символов',
    maxlength: 'Максимальная длина 15 символов'
  },
  email: {
    required: 'Email обязателен',
    emailValidators: 'Неправильный формат email'
  },
  age: {
    required: 'Возраст обязателен',
    rangeValidator: 'Значение должно быть числом  диапазоне 1...80',
    minRange: 'Значение должно быть больше 1',
    maxRange: 'Значение должно быть меньше 80'
  },
  site: {
    required: 'Сайт обязателен',
    urlNotAllowed: 'Неправильный формат адреса',
    pending: 'Выполняется проверка...'
  },
  role: {
    required: 'Роль обязательна'
  }
}

export const ROLES = ['Гость', 'Модератор', 'Администратор']
