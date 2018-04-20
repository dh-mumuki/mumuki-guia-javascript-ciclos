Hasta ahora nos enfocamos en comprender que el for nos sirve para repetir una accion X cantidad de veces.
En este ejercicio nos vamos a enforcar en la accion.
Hasta este momento solo imprimiamos por pantalla la palabra "Azul", ahora vamos a hacer algo mas avanzado y la idea seria utilizar el for para obtener el resultado de una operacion realizada una cantidad de veces.

Si quisieramos contar cuanto valen 5 monedas de 0.25 centavos, podriamos hacer dos cosas, una seria multiplicarlo, y otra seria sumar 5 veces 0.25 centavos.

Para hacer esto en codigo primero necesitamos hacer un for que se ejecute 5 veces:


```javascript
for(var i = 0; i < 5; i++) {
   //Hacer la sumatoria
}
```

Para hacer la suma, uno podria llega a sacar la siguiente conclusion:

```javascript
for(var i = 0; i < 5; i++) {
   var suma = suma + 0.25;
}
```

Donde por cada iteracion estamos diciendo que la suma es igual al valor que habia en suma mas 0.25, de esta manera podriamos obtener el total de los valores.

Este codigo si bien parece que funcionaria si lo ejecutamos no nos va a dar el valor que esperamos, porque?.

Esto se debe a que la variable suma esta declarada dentro del for y esto trae dos consecuencias:

1. La variable no existe / no puede ser llamada por fuera del for

```javascript
for(var i = 0; i < 5; i++) {
   var suma = suma + 0.25; //la variable suma esta declarada dentro del for y solo puede ser usada ahi dentro
}

console.log(suma) //la variable suma aca ya no existe y no puede ser consultada
```

2. La variable es inicializada cada vez que se ejecuta una iteracion del for

Dentro del for esta el codigo que queremos que se ejecute en CADA ITERACION, por lo cual en CADA ITERACION se vuelve a ejecutar el mismo codigo.
Por consecuencia, la primera vez que se ejecute el for

```javascript
   var suma = suma + 0.25; //suma podria terminar valiendo 0.25
}
```

Y la segunda vez que se ejecuta dentro del for

```javascript
   var suma = suma + 0.25; //Estamos volviendo a declara la variable suma, por lo cual no logramos almacenar el valor anterior.
}
```

Como solucionamos esto?.

Esto esta relacionado con la existencia de las variables, la variable suma es local al for, y por ende solo la podemos usar ahi y se resetea por cada iteracion. Si queremos mantener el valor por fuera de cada iteracion debemos hacer que esta varible sea global al for. Esto lo logramos de manera sencilla declarando la variable suma por fuera del for.

```javascript
var suma = 0; //Aca aprovecho e inicializo en 0 la variable suma.

for(var i = 0; i < 5; i++) {
  suma = suma + 0.25; //aca la variable como ya esta declarada por fuera del for esta puede ser modificada durante las iteraciones y no se "reinicia"
}

console.log(suma) //la variable suma aca ya  existe y nos devuelve el valor total que buscabamos.
```


En 

```javascript
function repetirXVecesAlgo(cantidadDeVeces) {
  for(var i = 0; i < cantidadDeVeces; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
  }
}
```

> Sabiendo esto escribí una función `sumatoriaHasta`, que toma un parámetro X un valor numerico e imprime la sumatoria de los numeros anteriores a el.
Por ejemplo: 
> 
> ```javascript
> ム sumatoriaHasta(4)
> "5"
> ```
> Esto hizo 0+1+2+3