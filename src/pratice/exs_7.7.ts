

interface IBaseId {
    id: number
}

enum TypeSort {
    asc,
    desc
}

const ascFn = <T extends IBaseId>(a: T, b: T): number => a.id - b.id
const descFn = <T extends IBaseId>(a: T, b: T): number => b.id - a.id

type TGetSortedDataById = <T extends IBaseId>(data: Array<T>, sort?: TypeSort) => Array<T>

const getSortedDataById: TGetSortedDataById = (data, sort = TypeSort.asc) => {
    const sortFn = sort === TypeSort.asc ? ascFn : descFn;
    return data.sort(sortFn)
};


const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

console.log(getSortedDataById(data))
console.log(getSortedDataById(data, TypeSort.desc))