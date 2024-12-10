const fn12 = (arg: { obj: [string, number]}): void => {
    console.log(arg)
}

const obj12 = {
    obj: ['1', 2]
}

//! неправильная типизация, так как в функции задаем кортеж, а аргументом передаем (string | number)[]
//! как вариант можно кастануть к томуже типу через as.
fn12(obj12)


//! infer позволяет как бы внутри типа инициализировать Y и достать сразу же его тип и потом воспользоваться им.
type getFirstArgType<T> = T extends (arg: infer Y, ...args: any) => any ? Y : never;

//! с помощью typeof вытаскиваем тип функции
const obj13: getFirstArgType<typeof fn12> = {
    obj: ['1', 2]
}

fn12(obj13)

const list = ['barrelblur', Symbol('Roman'), true]
type ArgsTypes = typeof list[number] //* string | boolean | symbol

type Unarray<T> = T extends (infer U)[] ? U : never;
type arrTypes = Unarray<typeof list> //* string | boolean | symbol
