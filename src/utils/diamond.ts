export enum DiamondType {
    STAR = 'STAR',
    NUMBER = 'NUMBER',
}

const drawSymbol = (i:number, symbolType: DiamondType):string => ((symbolType === DiamondType.NUMBER) ? `${i}`:`*`)
function drawRow(n: number, i: number, symbolType: DiamondType):string[]{
    return ([
        ...(' '.repeat(n-i).split('')),
        ...[
            ...Array.from(Array(i).keys()).map(j => drawSymbol(j+1, symbolType)),
            ...Array.from(Array(i-1).keys()).reverse().map(j => drawSymbol(j+1, symbolType))
        ],
        ...(' '.repeat(n-i).split('')),
    ])
}

export default async function diamond(n:number, inputType: DiamondType):Promise<string[][]> {
    const result:string[][] = [
        ...Array.from(Array(n).keys()).map(i => drawRow(n,i+1, inputType)),
        ...Array.from(Array(n-1).keys()).reverse().map(i => drawRow(n,i+1, inputType))
    ];
    return result
}