import { EmailValidator } from '../presentation/protocols/email-validador'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
