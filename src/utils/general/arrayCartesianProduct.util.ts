const prepareCartesian = (arr1 = [], arr2 = []):any[] => {
    /** the function return tne combinatorics between to arrays
    Returns: {res:any[]} the funtion return a array with the combinatorics of the elements in arr1 and arr2
    @param {arr1: any[]}
    @param {arr1: any[]}
  
    */
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        res.push(arr1[i] + "-" + arr2[j])
      }
    };
    return res;
  };


  export default prepareCartesian;