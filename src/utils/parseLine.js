export const parseLine = (line, lineNbr) => {
    const tag = line.match(/<TB>([\s\S]*?)<\/TB>/g)
    if (tag !== null) {
        const value = tag[0].replaceAll(/<(\/)?TB>/g, '')
        const isValid = (/^[0-9]{7}$/g).test(value)
        return {nbr: lineNbr, value, isValid}
    }
}