let misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]


  
  const YesStr = misc.filter((str) => {
    if (typeof str === "string") {
      return true
    }
  })
  
  console.log(YesStr)
 