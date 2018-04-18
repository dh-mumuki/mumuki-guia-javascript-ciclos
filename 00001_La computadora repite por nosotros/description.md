Como te adelantamos en el ejercicio anterior, en Javascript existe una forma de decir "quiero que estos comandos se repitan esta cantidad de veces".

Entonces, cuando es necesario repetir un comando (como console.log) un cierto número de veces, en lugar de copiar y pegar como veníamos haciendo hasta ahora, podemos utilizar la sentencia for.

Por ejemplo, si queremos repetir una instrucción 4 veces, podríamos escribir lo siguiente:

```javascript
for(var i = 0; i < 4; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
}
```
En el for tenés un contador de repeticiones, en el ejemplo anterior ese contador es la variable i. Tenés que indicar donde comienza a contar, cual es la condición en donde dejará de contar, en ese caso i < 4 y cómo se modifica la i en cada repetición (en este caso se incrementa uno).

Sabiendo esto, así es ¿Cómo podemos hacer para imprimir 5 veces por pantalla la palabra Azul?