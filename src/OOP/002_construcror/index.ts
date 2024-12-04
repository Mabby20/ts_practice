class ClassUser1 {
    name: string
    age: number

    //! все что идет выше полследнего конструктора это возможные сигнатуры конструктора, они также называются перегрузками конструктора
    constructor()
    constructor(age: number)
    constructor(name: string)
    constructor(name: string, age: number)

    //! последний конструктор всегда считается реализацией конструктора
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }

        if (typeof age === 'number') {
            this.age = age;
        }
    }
}