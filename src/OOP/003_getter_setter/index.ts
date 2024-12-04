class User4 {
    _login: string
    password: string

    //! если не указывать типизацию, то у аргумента метода будет тип значения который мы return в getter
    //! если  getter не используется то будет any и типизацию нужно указывать вручную
    set login(arg: string) {
        this._login = 'user-' + arg;
    }

    //! если использовать толь гетер без сетера - то login будет readonlu и заменить ничего нельзя будет.
    get login() {
        return this._login;
    }

    //* в getter и setter нельзя использовать асинхронные операции, это делается в методах
    //* символ _ указывается для свойств которые хотим определить getterом и setterом
}

const us = new User4()

us.login = 'asdf'