import { EmailValidator } from '../presentation/protocols/email-valitador'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
