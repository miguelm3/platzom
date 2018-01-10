export default function platzom (str) {
  let word = str;
  const largo = word.length;

  //Si la palabra original es un palíndromo. intercalar mayuscula y minúscula
  const reverse = (str)=> str.split('').reverse().join('');
  const minMay = (str) => {
    let newWord='';
    let capitalize = true;

    for(let i=0; i<largo; i++ ) {
      let letra = str.split('')[i]; //str,charAt(i);

      newWord += capitalize ? letra.toUpperCase() : letra.toLowerCase();
      capitalize = !capitalize;
    }
    return newWord;
  };

  if ( str === reverse(str) ) {
    return minMay(str);
  }

  //Si la palbra termina en 'ar' se sacan esas dos letras.
  if(str.toLowerCase().endsWith('ar')){
    word = str.slice(0,-2);
  }

  //Si la palabra inicia con Z se le añade 'pe' al final
  if (str.toLowerCase().startsWith('z')) {
    word += 'pe';
  }

  //Si la palabra tiene 10 o más letras, partir a la mitad y poner un guión en el medio

  if (largo >= 10) {
    let w1 = word.slice(0,Math.round(largo/2));
    let w2 = word.slice(Math.round(largo/2));
    word = `${w1}-${w2}`;

  }

  return word;
}
