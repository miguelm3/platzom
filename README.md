# Platzom miguelm3 version
Realizado para el curso de [Platzi](http://www.platzi.com).



## Reglas
- Si la palabra original es un palíndromo. intercalar mayuscula y minúscula y no importa nada más.
- Si al palabra termina en 'ar' entonces le sacamos el 'ar'
- Si la palabra inicia con Z se le añade 'pe' al final
- Si la palabra tiene 10 o más letras, partir a la mitad y poner un guión en el medio


##Instalación
```
npm install platzommiguelm3
```

##Uso
```
import platzom from 'platzommiguelm3'

platzom('Programar'); //Program
platzom('Zapato'); //Zapatope
platzom('Zarpar'); //Zarppe
platzom('abecedario'); //abece-dario
platzom('sometemos'); //SoMeTeMoS
```

### Licencia
MIT
