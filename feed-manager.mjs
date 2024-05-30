import { dirname, join } from 'path'
import { access, constants, readFile, writeFile } from 'fs/promises'

const __dirname = import.meta.dirname
const jsonFile = join(__dirname, 'feeds.json')

console.log(jsonFile)


export async function getLinks(){
    try {
       await access(jsonFile, constants.F_OK)
    } catch (error) {
        await writeFile(jsonFile, JSON.stringify([]))
    }

    const contents = await readFile(jsonFile, { encoding: 'utf8' })

    return JSON.parse(contents)
}

export async function saveLinks(links){
    await writeFile(jsonFile, JSON.stringify(links));
}
