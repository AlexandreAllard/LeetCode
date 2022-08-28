/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '') //Remove everything except A-Z and 0-9 characters
    s = s.toLowerCase() //Everything to lowercase
    
    console.log(s)

    for(let i=0; i<s.length/2; i++){
        if(s[i]!=s[s.length-i-1]){
            console.log(s[i])
            console.log(s[s.length-i-1])
            return false
        }
    }
    
    return true
};