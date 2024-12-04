const skill: [number, string] = [1, 'dev']
const skill2: readonly [number, string, ...boolean[]] = [1, 'dev']
const skill3: ReadonlyArray<string> = ['dev1', 'dev2']

skill2.push() //* нельзя запушить так как только readonly