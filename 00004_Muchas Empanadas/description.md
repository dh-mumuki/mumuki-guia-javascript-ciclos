Con las ejercitaciones previas vimos como con el for ejecutar una accion una cantidad de veces fija y variable y como hacer algun procesamiento dentro del mismo.

En el ejercicio anterior supimos como calcular la sumatoria hasta el numero 4.
La idea seria que logremos hacer una funcion que calcule la sumatoria hasta cualquier numero que le 
pasemos.

Para esto vamos a expandir el ejercicio de las empanadas anterior en el cual calculabamos las calorias de 3 empanadas.

```javascript
var totalCalorias = 0; 

for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 0.25;
}

console.log(totalCalorias)
```

Para lograr esto lo que tenemos que modificar es algo similar al ejercicio 2 de Variables Repetidas.

Primero tenemos que sacar el numero 3 y hacer que este sea variable, por ejemplo "x" o "cantidadDeEmpanadas"

```javascript
var cantidadEmpanadas = 3;
var totalCalorias = 0; 

for(var i = 0; i < cantidadDeEmpanadas; i++) {
  totalCalorias = totalCalorias + 0.25;
}

console.log(totalCalorias)
```
Luego de hacer esta modificacion la variable cantidadEmpanadas podria ser un argumento de una funcion.

```javascript
function caloriasDeEmpanadas(cantidadDeEmpanadas){
  var totalCalorias = 0; 

  for(var i = 0; i < cantidadDeEmpanadas; i++) {
    totalCalorias = totalCalorias + 0.25;
  }

  console.log(totalCalorias)
}
```

Y de esta manera logramos hacer nuestra funcion que al pasarle la cantidad de empanadas esta imprime por pantalla la cantidad de calorias totales.


> Sabiendo esto escribí una función `sumatoriaHasta(numero)`, que toma un parámetro X un valor numerico e imprime la sumatoria de los numeros anteriores a el.
Por ejemplo: 
> 
> ```javascript
> ム sumatoriaHasta(4)
> "5"
> ```
> Esto hizo 0+1+2+3