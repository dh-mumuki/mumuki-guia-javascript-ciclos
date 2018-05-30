En el ejercicio anterior logramos hacer que se imprima por pantalla 5 veces la palabra "Azul" de una manera mucho más eficiente y prolija gracias al for.

Ahora, muchas veces nos vamos a encontrar con que en vez de necesitar hacer algo, una cantidad de veces constante, como 5 en el ejercicio anterior, vamos a necesitar que esto pueda variar.

Por ejemplo, podríamos hacer una función que imprima 5 veces azul y que esta los imprima usando el for, ahora tambien podemos llegar a necesitar que se imprima 4 veces, y para eso hoy en día necesitaríamos crear otra función. 
Como ven esto no escala, sin embargo con algunas cosas que vimos podemos darle una vuelta de rosca y hacer una función genérica que reciba cuantas veces queremos que se ejecute algo. Algo así como un imprimir varias veces "Azul" genérico.

Para esto tenemos que modificar el for.
Si queremos repetir una instrucción 4 veces, podríamos escribir lo siguiente:

```javascript
for(var i = 0; i < 4; i++) {
   //Acá adentro escribo las instrucciones que quiero repetir
}
```

Para que el for sea dinámico y en vez de repetirse solo 4 veces y pueda hacerlo x cantidad de veces solo hay que modificar el 4.

```javascript
for(var i = 0; i < x; i++) {
   //Acá adentro escribo las instrucciones que quiero repetir
}
```

Acá x es una variable numérica que en el caso de valer 4 sería el equivalente al anterior, salvo que ahora podemos a la variable x, asignarle distintos valores.
Una manera de obtener este valor sería si nos lo pasan como parametro de una función y adentro de la misma usarla.

```javascript
function repetirXVecesAlgo(cantidadDeVeces) {
  for(var i = 0; i < cantidadDeVeces; i++) {
   //Acá adentro escribo las instrucciones que quiero repetir
  }
}
```

> Sabiendo esto escribí una función `imprimirAzul`, que toma un parámetro X e imprime `"Azul"` X cantidad de veces.
Por ejemplo: 
> 
> ```javascript
> ム imprimirAzul(3)
> "AzulAzulAzul"
> ```