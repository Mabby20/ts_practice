const generateError = (msg: string) => { // never
    throw new Error(msg)
}

const while1 = () => { // never
    while (true) { }
}

const rec = () => { // never
    return rec()
}

function generateError1(msg: string) { // void
    throw new Error(msg)
}

function while2() { // void
    while (true) { }
}

function rec1() { // never - в уроке any показывает
    return rec1()
}


//! 