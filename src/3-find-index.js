export const findIndex = (array, value) => {
  const ind = array.indexOf(value)
  if(array.length === 0){
    return "No items!"
  }
  return ind
}
