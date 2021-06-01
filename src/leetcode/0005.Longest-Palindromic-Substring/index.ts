// 马拉车算法(Manacher's algorithm)，时间复杂度 O(n)，空间复杂度 O(n)
export function longestPalindrome(s: string): string {
    let newS = '#'
    for (let i:number = 0; i < s.length; i++) {
        newS += s[i] + '#'
    }
    const len:number = newS.length
    const dp:number[] = []
    let [maxR, pos, maxLen, maxLenPos]:number[] = [0, 0, 0, 0] 
    for (let i:number = 0; i < len; i++) {
        if (i < maxR) {
            dp[i] = Math.min(maxR - i, dp[2 * pos - i])
        } else {
            dp[i] = 1
        }

        while ((i - dp[i]) >= 0 && (i + dp[i]) < len && newS[i - dp[i]] === newS[i + dp[i]]) {
            dp[i]++
        }
        if ((i + dp[i]) > maxR) {
            maxR = i + dp[i]
            pos = i
        }
        if (maxLen < dp[i]) {
            maxLen = dp[i]
            maxLenPos = i
        }
    }
    s = ''
    for (let i:number = maxLenPos - maxLen + 1; i < maxLenPos + maxLen - 1; i++) {
        if (newS[i] !== '#') s += newS[i]
    }
    return s
}
// 动态规划算法(dynamic programming)，时间复杂度 O(n^2)，空间复杂度 O(n^2)
export function longestPalindrome1(s: string): string {
    let len:number = s.length, start:number = 0, end:number = 0;
	const matrix:any[] = new Array(len);
	let max:number = 0;

    for(let i:number = 0; i < len; i++){
        matrix[i] = new Array(len).fill(0)
    }

	for(let i:number = 0; i < len; i ++){
		matrix[i][i] = 1;
	}

	for(let j:number = 1; j < len; j++){
		for(let i:number = j - 1; i >= 0; i--){
			if(s.charAt(i) == s.charAt(j)){
				if(i + 1 <= j - 1 && matrix[i + 1][j - 1] != 0) {
					matrix[i][j] = matrix[i + 1][j - 1] + 2;
				}

				if(i + 1 == j){
					matrix[i][j] = 2;
				}

				if(max < matrix[i][j]){
					max = matrix[i][j];
					start = i; end = j;
				}
			}
		}
	}

	return end == len ? s.substring(start) : s.substring(start, end + 1);
	
}
