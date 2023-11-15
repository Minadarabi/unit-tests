export const hackerSpeak = (words) => {
  let hacked = words
  hacked = hacked.replace(/a/ig , "4")
  hacked = hacked.replace(/e/ig , "3")
  hacked = hacked.replace(/i/ig , "1")
  hacked = hacked.replace(/o/ig , "0")
  hacked = hacked.replace(/s/ig , "5") 
  return hacked
}
