export function myAtoi(s: string): number {
    const trimS:string = s.trim()
    if (trimS.length === 0) return 0

    const intS:number = parseInt(trimS, 10)
    if (Number.isNaN(intS)) return 0

    const minNumber:number = Math.pow(-2, 31)
    if (intS < minNumber) return minNumber

    const maxNumber:number = Math.pow(2, 31) - 1
    if (intS > maxNumber) return maxNumber

    return intS
};