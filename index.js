function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  var currentlyServing = []
  let i = 0;
  while (i < deliLine.length ) {
    i++;
  }
  if (deliLine.length === 0) {
    currentlyServing.push('There is nobody waiting to be served!');
    console.log(currentlyServing);
  }
  else
    currentlyServing.push(`Currently serving ${deliLine.shift()}.`)
    return currentlyServing;
    
}



