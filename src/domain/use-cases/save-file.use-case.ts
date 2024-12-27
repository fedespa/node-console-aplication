import fs from "fs"

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}



export interface Options {
    fileContent: string
    pathDestination?: string
    fileName?: string
}

export class SaveFile implements SaveFileUseCase {
    constructor() { }

    execute({ fileContent, pathDestination = "outputs", fileName = "table" }: Options) {

        try {
            fs.mkdirSync(pathDestination, { recursive: true })
            fs.writeFileSync(`${pathDestination}/${fileName}.txt`, fileContent)
            return true
        } catch(error) {
            console.error(error)
            return false
        }
    }
}