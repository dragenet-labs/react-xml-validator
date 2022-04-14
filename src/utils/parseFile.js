import {parseLine} from "./parseLine";

export const parseFile = (file) => {
    const lines = file.split(/\r\n|\n/);
    return lines.map((line, i) => parseLine(line, i + 1))
        .filter(val => val !== undefined && val !== null);


}