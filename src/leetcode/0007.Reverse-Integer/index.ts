export function reverse(x: number): number {
    let strX:string = String(x)
    const len:number = strX.length - 1
    const arr:string[] = []
    for (let i:number = len;i >= 0; i--) {
        arr.push(strX[i])
    }
    const y:number = parseInt(arr.join(''), 10)
    if (y > 0x7FFFFFFF) return 0
    return y * Math.sign(x)
};