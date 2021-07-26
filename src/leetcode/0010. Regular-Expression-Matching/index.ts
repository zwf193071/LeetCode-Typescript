
export function isMatch(s: string, p: string): boolean {
    const sLen:number = s.length;
    const pLen:number = p.length;
    const dp:any[] = new Array(sLen + 1);
    if (!s || !p) return false
    for(let i:number = 0;i <= sLen; i++){
        dp[i] = new Array(pLen + 1).fill(false); //每行有10列
    }
    dp[0][0] = true;
    for (let i:number = 0; i < pLen; i++) {
        if (p.charAt(i) === '*' && dp[0][i-1]) {
            dp[0][i+1] = true;
        }
    }
    for (let i:number = 0; i < sLen; i++) {
        for (let j:number = 0; j < pLen; j++) {
            if (p.charAt(j) === '.') {
                dp[i+1][j+1] = dp[i][j];
            }
            if (p.charAt(j) === s.charAt(i)) {
                dp[i+1][j+1] = dp[i][j];
            }
            if (p.charAt(j) === '*') {
                if (p.charAt(j-1) !== s.charAt(i) && p.charAt(j-1) !== '.') {
                    dp[i+1][j+1] = dp[i+1][j-1];
                } else {
                    dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]);
                }
            }
        }
    }
    return dp[sLen][pLen]
};