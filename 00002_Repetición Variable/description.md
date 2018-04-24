En el ejercicio anterior logramos hacer que se imprima por pantalla 5 veces la palabra "Azul" de una manera mucho más eficiente y prolija gracias al for.

Ahora, muchas veces nos vamos a encontrar con que en vez de necesitar hacer algo una cantidad de veces constante como 5 en el ejercicio anterior vamos a necesitar que esto pueda variar.

Por ejemplo, recien hicimos una funcion que imprime 5 veces azul usando el for. También podriamos necesitar que se imprima 4 veces, y para eso hoy en dia necesitariamos crear otra funcion. 
Como ven esto no escala, sin embargo con algunas cosas que vimos podemos darle una vuelta de rosca y hacer una funcion generica que reciba cuantas veces queremos que se ejecute algo. Algo asi como un imprimir varias veces "Azul" generico.

Para esto tenemos que modificar el for.
Antes, si queríamos repetir una instrucción 4 veces, podríamos escribir lo siguiente:

```javascript
for(var i = 0; i < 4; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
}
```

Para que el for sea dinamico, y en vez de repetirse solo 4 veces pueda hacerlo x cantidad de veces, solo hay que modificar la validación (o sea, el 4).

```javascript
for(var i = 0; i < x; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
}
```

Aca x es una variable numerica que en el caso de valer 4 seria el equivalente al anterior, salvo que ahora podemos a la variable x asignarle distintos valores.
Una manera de obtener este valor seria si nos lo pasan como parametro de una funcion y adentro de la misma usarla.

```javascript
function repetirXVecesAlgo(cantidadDeVeces) {
  for(var i = 0; i < cantidadDeVeces; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
  }
}
```

> Sabiendo esto escribí una función `imprimirAzul`, que toma un parámetro X e imprime `"Azul"` X cantidad de veces.
Por ejemplo: 
> 
> ```javascript
> ム imprirAzul(3)
> "AzulAzulAzul"
> ```