type ReadOrWrite = 'read' | 'write';

type Access12 = `can${Capitalize<ReadOrWrite>}`

type FromReadOrWrite<T> = T extends `can${infer T}` ? Lowercase<T> : never;

type T = FromReadOrWrite<Access12>