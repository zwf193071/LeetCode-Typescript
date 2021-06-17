export function convert(s: string, numRows: number): string {
    if (numRows === 1) return s
    const result = new Map()
    const eachRoundNumber:number = numRows + (numRows - 1) - 1;

    for (let i:number = 1; i <= numRows; i++) {
        result.set(i, '')
    }
    for (let i:number = 1; i <= s.length; i++) {
        let key:number = i % eachRoundNumber
        key = key === 0 ? key + eachRoundNumber : key
        key = key <= numRows ? key : numRows - (key % numRows)
        result.set(key, result.get(key) + s.charAt(i-1))
    }
    const arr:any[] = new Array()
    for (let i:number = 1; i <= numRows; i++) {
        arr.push(result.get(i))
    }
    return arr.join('')
};