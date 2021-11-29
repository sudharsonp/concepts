const longestPalindrom = (t) => {
    let p=new Array(t.length+1).fill(0)
    let c=0, r=0, maxLPSlength = 0, maxCenterPosition = 0
    
    for (let i =1; i < t.length -1 ; i++){
        let mirror = 2 * c - i

        if(i < r){
            p[i] = Math.min(r-i, p[mirror] ? p[mirror] : 0)
        }

        while( t[i + (1 + p[i])] === t[i - (1 + p[i])] ){
            p[i]++
        }
        
        if(p[i] > maxLPSlength){
            maxLPSlength = p[i]
            maxCenterPosition = i
        }

        if(i + p[i]> r) {
            c = i
            r = i + p[i]
        }
    }

    const start = maxCenterPosition - maxLPSlength
    const end = maxCenterPosition + maxLPSlength

    //substring does not print the end position
    console.log("The longest substring palindrom ", t ,"is", t.substring(start, end+1))
}

let text = "babcbabcbaccba"
longestPalindrom(text)
///LPS of string is babcbabcbaccba : abcbabcba
