class User3 {
    skills: string[] = []

    //! оперделение сигнатур
    addSkill(skill: string): void
    addSkill(skills: string[]): void

    //! определение основной имплементации метода
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills)
        } else if (Array.isArray(skillOrSkills)) {
            this.skills = this.skills.concat(skillOrSkills)
        }
    }
}

function f(arg: string): string;
function f(arg: number): number
function f(arg: string | number): string | number {
    if (typeof arg === 'string') {
        return '';
    } else {
        return 1
    }
}