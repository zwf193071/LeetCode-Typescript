export function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let tempX:number = x
    let rev:number = 0
    while(x) {
        rev = rev * 10 + x % 10
        x = Math.floor(x/10)
    }
    return rev === tempX
};