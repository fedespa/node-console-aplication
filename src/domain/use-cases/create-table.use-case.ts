export interface CreateTableUseCase {
    execute: (options: Options) => string;
}

export interface Options {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {

    }

    execute({ base, limit }: Options) {
        let outputMessage = ""
        for (let x = 1; x <= limit; x++) {
            outputMessage += `${base} x ${x} = ${base * x} \n`
        }
        return outputMessage
    }
}