//! если не использовать конструктор по дефлолту будет просить инициализировать значение в конструкторе класса
//! можно исправить 2 способоми, использовать оператор ! или отключить strictPropertyInitialization = false
//! для чего нужно? - нужно когда будем использовать классы к интерфейсу - не совсем понял.

class ClassUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class ClassUser2 {
    name: string
}