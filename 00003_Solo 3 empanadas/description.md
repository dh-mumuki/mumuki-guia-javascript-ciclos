Hasta ahora nos enfocamos en comprender que el for nos sirve para repetir una accion X cantidad de veces.
En este ejercicio nos vamos a enforcar en la accion.
Hasta este momento solo imprimiamos por pantalla la palabra "Azul", ahora vamos a hacer algo mas avanzado y la idea seria utilizar el for para obtener el resultado de una operacion realizada una cantidad de veces.

Si quisieramos contar cuantas calorias tienen 3 empanadas y cada empanada tiene 300 calorias, podriamos hacer dos cosas, una seria multiplicar, y otra seria sumar 3 veces 300 calorias.

Para hacer esto en codigo primero necesitamos hacer un for que se ejecute 3 veces:


```javascript
for(var i = 0; i < 3; i++) {
   //Hacer la sumatoria
}
```

Para hacer la suma, uno podria llega a sacar la siguiente conclusion:

```javascript
for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300;
}
```

Donde por cada iteracion estamos diciendo que el "totalCalorias" es igual al valor que habia en "totalCalorias" mas 300, de esta manera podriamos obtener el total de los valores.

Este codigo si bien parece que funcionaria si lo ejecutamos no nos va a dar el valor que esperamos, porque?.

Esto se debe a que la variable "totalCalorias" esta declarada dentro del for y esto trae dos consecuencias:

* La variable no existe / no puede ser llamada por fuera del for

```javascript
for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300; //la variable totalCalorias esta declarada dentro del for y solo puede ser usada ahi dentro
}

console.log(totalCalorias) //la variable totalCalorias aca ya no existe y no puede ser consultada
```

* La variable es inicializada cada vez que se ejecuta una iteracion del for

Dentro del for esta el codigo que queremos que se ejecute en CADA ITERACION, por lo cual en CADA ITERACION se vuelve a ejecutar el mismo codigo.
Por consecuencia, la primera vez que se ejecute el for

```javascript
   var totalCalorias = totalCalorias + 300; //totalCalorias podria terminar valiendo 300
}
```

Y la segunda vez que se ejecuta dentro del for

```javascript
   var totalCalorias = totalCalorias + 300; //Estamos volviendo a declarar la variable totalCalorias, por lo cual no logramos almacenar el valor anterior y acumular el nuevo valor.
}
```

Como solucionamos esto?.

Esto esta relacionado con la existencia de las variables, la variable totalCalorias es local al for, y por ende solo la podemos usar ahi y se resetea por cada iteracion. Si queremos mantener el valor por fuera de cada iteracion debemos hacer que esta varible sea global al for. Esto lo logramos de manera sencilla declarando la variable totalCalorias por fuera del for.

```javascript
var totalCalorias = 0; //Aca aprovecho e inicializo en 0 la variable totalCalorias.

for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 300; //como la variable ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia", y aca obtenemos el valor total acumulado
}

console.log(totalCalorias) //la variable totalCalorias aca ya existe y nos devuelve el valor total que buscabamos.
```

> Sabiendo esto escribí una función `sumar4MonedasDe25`, que imprime la sumatoria de las 4 monedas de 25 centavos.
Por ejemplo: 
> 
> ```javascript
> ム sumar4MonedasDe25()
> "1.0"
> ```
> Esto hizo 0.25+0.25+0.25+0.25