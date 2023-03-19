/*

*/

class Trie extends Map {
    constructor() {
      super()
      this.count = 0
    }
    
    insert(str, idx) {
      let curr = this
      
      for (const c of str) {
        curr.count++
        if (!curr.has(c)) curr.set(c, new Trie())
        curr = curr.get(c)
      }
    }
  }
  
  const abbr = (word, i) => {
    const n = word.length
    if (n - i <= 3) return word
    return `${word.slice(0, 1 + i)}${n - i - 2}${word[n - 1]}`
  }
  
  var wordsAbbreviation = function(dict) {
    const groups = {}
  
    for (const [i, word] of dict.entries()) {
      const a = abbr(word, 0)
      if (!groups[a]) groups[a] = []
      groups[a].push(i)
    }
    
    let res = []
    
    for (const group in groups) {
      const trie = new Trie()
  
      for (const i of groups[group]) trie.insert(dict[i])
  
      for (const i of groups[group]) {
        let len = 0
        const word = dict[i]
        let curr = trie
  
        do curr = curr.get(word[len++])
        while (curr && curr.count > 1) 
  
        res[i] = abbr(dict[i], len - 1)
      }
    }
  
    return res
  };