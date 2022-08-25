export class User {
  constructor(public id: number,
              public name: string | null,
              public password: string | null,
              public email: string | null,
              public role: string | null,
              public site: string | null,
              public age: number | string | null) {
  }
}
