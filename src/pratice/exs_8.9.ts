interface IForm {
    name: string;
    password: string;
    age?: number;
}

interface IValidSuccess {
    isValid: true;
}

interface IValidError {
    isValid: false;
    errorMessage: string
}

const form: IForm = {
    name: 'Вася',
    password: '123'
}

type formValidation<T> = {
    [key in keyof T]: IValidSuccess | IValidError
}

type validatedForm = formValidation<IForm>

const formValidation: validatedForm = {
    name: {
        isValid: true
    },
    password: {
        isValid: false,
        errorMessage: '5 символов давай'
    }
}