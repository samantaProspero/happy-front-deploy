import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const ValidationErrors: Errors = {};
  err.inner.forEach((error) => {
    // ValidationErrors[error.path] = error.message;
    if(error.path){
    return ValidationErrors[error.path] = error.message;
    }
    console.log('Não achou o path do error', error);
    ValidationErrors[error.value] = error.value
  });
  return ValidationErrors
}
