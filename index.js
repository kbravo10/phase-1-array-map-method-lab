const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const modTutirials = tutorials.map(function(tutorial){

    const arrtutorial = tutorial.split(" ");

    const temp = arrtutorial.map(function(words){

      //console.log( words[0].toUpperCase())
      return words[0].toUpperCase() + words.slice(1);

    })
    //console.log(arrtutorial)
    return temp.join(" ");

  })
  console.log(modTutirials)
  
  return modTutirials;
}
