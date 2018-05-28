Con las ejercitaciones previas vimos como usar el for para ejecutar una accion una cantidad de veces fija y variable y como hacer algun procesamiento dentro del mismo.

En el ejercicio anterior supimos como calcular la sumatoria de 4 monedas de 25 centavos.
La idea seria que logremos hacer una funcion que calcule la sumatoria de cualquier cantidad de monedas.

Para esto vamos a expandir el ejemplo de las empanadas anterior en el cual calculabamos las calorias de 3 empanadas.

```javascript
var totalCalorias = 0; 

for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias)
```

Para lograr esto lo que tenemos que modificar es algo similar al ejercicio 2 de Variables Repetidas.

Primero tenemos que sacar el numero 3 y hacer que este sea variable, por ejemplo "x" o "cantidadDeEmpanadas"

```javascript
var cantidadEmpanadas = 3;
var totalCalorias = 0; 

for(var i = 0; i < cantidadDeEmpanadas; i++) {
  totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias)
```
Luego de hacer esta modificacion la variable cantidadEmpanadas podria ser un argumento de una funcion.

```javascript
function caloriasDeEmpanadas(cantidadDeEmpanadas){
  var totalCalorias = 0; 

  for(var i = 0; i < cantidadDeEmpanadas; i++) {
    totalCalorias = totalCalorias + 300;
  }

  console.log(totalCalorias)
}
```

Y de esta manera logramos hacer nuestra funcion que al pasarle la cantidad de empanadas esta imprime por pantalla la cantidad de calorias totales.


> Sabiendo esto escribí una función `sumarMonedasDe25(cantidadDeMonedas)`, que toma como parámetro un valor numerico y devuelve la sumatoria de las monedas de 25 centavos.
Por ejemplo: 
> 
> ```javascript
> ム sumarMonedasDe25(7)
> 1.75
> ```
> Esto hizo 0.25+0.25+0.25+0.25+0.25+0.25+0.25