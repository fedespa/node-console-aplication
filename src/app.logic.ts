import { yarg } from "./config/plugins/yargs.plugin"

const fs = require("fs")

const { l: limit, s: showTable, b: base } = yarg

let output = `---------- Tabla del ${base} ---------- \n`

for (let x = 1; x <= limit; x++) {
    output += `${base} x ${x} = ${base * x} \n`
}

const outputPath = "output"


if (showTable){
    console.log(output)
}

console.log("Archivo creado!")

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-del-${base}.txt`, output) 