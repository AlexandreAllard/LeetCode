/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    
    if(s.length != t.length) { return false }
    
    for (let i=0; i<s.length; i++){
        map1.set(s[i], map1.get(s[i]) + 1 || 1) //If s[i] exists, increment it, otherwise, s[i] receives 1
        map2.set(t[i], map2.get(t[i]) + 1 || 1)
    }
    
    for (let i=0; i<s.length; i++){
        if(map1.get(s[i]) != map2.get(s[i])){
            return false
        }
    }
    
    return true
    
};