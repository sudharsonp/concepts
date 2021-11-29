/*
 <li>The idea is to generate all even length and odd length palindromes and keep 
        track of the longest palindrome seen so far.
    </li>
    <li>To generate odd length palindrome, Fix a center and expand in both directions 
        for longer palindromes, i.e. fix i (index) as the center and two indices as i1 = i+1 and i2 = i-1
    </li>
    <li>
        Compare i1 and i2 if equal then decrease i2 and increase i1 and find the maximum length. 
        Use a similar technique to find the even-length palindrome.
    </li>
    <li>
        Take two indices i1 = i and i2 = i-1 and compare characters at i1 and i2 and 
        find the maximum length till all pairs of compared characters are equal and store the maximum length.
    </li>
    <li>    
        Print the maximum length.
    </li>
*/

const printSubStr= (str, low, high) => console.log(str.substring(low, high + 1))

const input = "forgeeksskeegfor"

const findLongestSubString =(str) => {
    const length = str.length
    let start = 0
    let maxlength = 1
    let low, high
    for(let i = 1; i < length; i++) {
        // For even string length with middle value  --(i-1)|(i)-- while middle does not represent any value as its betwen array
        low = i-1
        high = i
        while( low >= 0 && high < length && str[low] === str[high]){
            low--
            high++
        }

        // Exiting the while loop means the the string is no longer same and reset the high and low to previous value
        low++
        high--

        if(str[low] === str[high] && (high - low + 1) > maxlength) {
            start = low
            maxlength = high -low + 1 
        }

        // For even string length with middle value    <-- (i-1)--X--(i+1) -->
        low = i-1
        high = i+1
        while( low >= 0 && high < length && str[low] === str[high]){
            low--
            high++
        }

        low++
        high--

        if(str[low] === str[high] && (high - low + 1) > maxlength) {
            start = low
            maxlength = high -low + 1 
        }

    }
    console.log(maxlength)
    printSubStr(str, start, start + maxlength - 1)  
}

findLongestSubString(input)
