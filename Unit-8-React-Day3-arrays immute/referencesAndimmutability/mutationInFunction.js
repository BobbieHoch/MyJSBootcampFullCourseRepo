function minimum(array) {
    array.sort();
    return array[0]
  }
  
  const items = [7, 1, 9, 4];
  const min = minimum(items);
  console.log(min)
  console.log(items)