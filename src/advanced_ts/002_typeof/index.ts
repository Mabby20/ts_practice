const user44 = {
    name: 'aboba'
}

type typeUser = keyof typeof user44 // "name"

enum Enum {
    aboba,
    bob
}

type EnumUnion = keyof typeof Enum // "aboba" | "bob"