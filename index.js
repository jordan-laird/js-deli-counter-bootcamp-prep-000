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

function currentLine(katzDeliLine) {
  let i = 0;
  var line =[]
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}


