export function romanToInt(s: string): number {
    const sMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])
    let [number, lastInt, total]:number[] = [0, 0, 0]
    for (let i:number = 0, len:number = s.length; i < len; i++) {
        let startIndex:number = len - (i + 1)
        let endIndex:number = len - i
        let char:string = s.slice(startIndex, endIndex)
        let num:number = sMap.get(char)
        if (num < lastInt) {
            total = total - num
        } else {
            total = total + num
        }
        lastInt = num
    }
    return total
};