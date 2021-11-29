const longestCommonSequence = (text1 ,text2) => {
    let lcsMatrix = new Array(text2.length).fill(0).map(() => new Array(text1.length).fill(0))
    let max = 0
    let result = []

    for(let i = 0; i <= text1.length; i++) {
        for(let j = 0; j <= text2.length; j++) {
            if (i == 0 || j == 0) {
                lcsMatrix[i][j] = 0
            } else if (text1[i - 1] == text2[j - 1]){
                lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1
            } else {
                lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1])
            }  

            // In print logic tracking
            if(lcsMatrix[i][j] > max){
                max = lcsMatrix[i][j]
                //Clear previous lcs values
                result = []
                result = result.concat(text1.substring(i-max,i+1))
            }else if(lcsMatrix[i][j] == max){
                result.concat(text1.substring(i-max,i+1))
            }
        }
    }

    console.log('Longest common stringstring', result , "and length is ", max)

    // Following code is used to print LCS
    let index = lcsMatrix[text1.length][text2.length]

    // Create a character array to store the lcs string
    let lcsString = new Array(index - 1).fill(0)

    // Start from the right-most-bottom-most corner and
    // one by one store characters in lcs[]
    let i = text1.length
    let j = text2.length
    while (i > 0 && j > 0) {
        // If current character in X[] and Y are same, then
        // current character is part of LCS
        if (text1[i-1] == text2[j-1]) {
            // Put current character in result
            lcsString[index-1] = text1[i-1]
            // reduce values of i, j and index
            i--
            j--
            index-- 
        }else if (lcsMatrix[i-1][j] > lcsMatrix[i][j-1]){  
        // If not same, then find the larger of two and
        // go in the direction of larger value      
            i--
        }else {
            j--
        }
    }

    // Print the lcs
    console.log('Longest common stringstring',lcsString.join(''), lcsMatrix[text1.length][text2.length])

    return lcsMatrix[text1.length][text2.length]
}

longestCommonSequence('AGGTAB', 'GXTXAYB')

/* recursive algorithm*/

const lcs = (text1,text2) =>{
    let max = 0
    let result = []

    const computeString = (start, value) => {
        if(value > max){
            max = value
            //Clear previous lcs values
            result = []
            result = result.concat(text1.substring(start-max,start+1))
        }else if(value == max){
            result = result.concat(text1.substring(start-max,start+1))
        }
    }

    const recursivelcs = (i,j) => {
        if(i == 0 || j == 0){
            return 0
        }else if(text1[i-1] == text2[j-1]){
            const result =  1 + recursivelcs(i-1,j-1)
            computeString(i, result)
            return result
        }else{
            const result =  Math.max(recursivelcs(i,j-1), recursivelcs(i-1, j))
            computeString(i, result)
            return result
        }
    }
    recursivelcs(text1.length, text2.length)
    console.log('Longest common stringstring recursive', result , "and length is ", max)
}


const s1 = "AGGTAB";
const s2 = "GXTXAYB";
console.log(lcs(s1, s2))