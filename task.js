//First task
function convertFahrToCelsius(fahrenheit) {
  var result =(fahrenheit-32)*5/9
  if (result) {
      console.log(result.toFixed(4));
  }
  else {
      var output =`${fahrenheit} is not a valid number but a/an ${typeof fahrenheit}`
      console.log(output);
  }
}
convertFahrToCelsius({temp:0})



//Second task
const checkYuGiOh = (n) => {
  const arr = [];
  let str;
  if(!Number.isInteger(parseInt(n))){
    return `invalid parameter: ${JSON.stringify(n)}`
  }else{

  for(let i = 1; i <= n; i++){
    str="";
    if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      str += "yu-gi-oh"
    }else if(i % 3 === 0 && i % 5 === 0){
      str += "gi-oh"
    }else if(i % 2 === 0 && i % 3 === 0){
      str += "yu-gi"
    }else if(i % 2 === 0 && i % 5 === 0){
      str += "yu-oh"
    }else if(i % 2 === 0){
      str += "yu"
    }else if(i % 3 === 0){
      str += "gi"
    }else if(i % 5 === 0){
      str += "oh"
    }
    arr.push(str||i)
  }
}
  return arr;
}

checkYuGiOh();
