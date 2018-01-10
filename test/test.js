const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function () {
  
  it('Si al palabra termina en \'ar\' entonces le sacamos el \'ar\'', function () {
    const word = platzom('Programar');
    expect(word).to.equal('Program')
  });

  it('Si la palabra inicia con Z se le añade \'pe\' al final', () => {
    const word = platzom('Zapato');
    expect(word).to.equal('Zapatope');
  });

  it ('Si la palabra tiene 10 o más letras, partir a la mitad y poner un guión en el medio', function () {
    const word = platzom('abecedario');
    expect(word).to.equal('abece-dario');
  });

  it ('Si la palabra original es un palíndromo. intercalar mayuscula y minúscula y no importa nada más.', function () {
    const word = platzom('sometemos');
    expect(word).to.equal('SoMeTeMoS');
  })
  
  
});

