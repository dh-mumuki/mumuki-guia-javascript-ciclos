Antes de seguir avanzando con el for, tratemos de analizar bien que es lo que sucede adentro del mismo.
Ya sabemos que ejecuta el codigo que nosotros le pedimos mientras se cumpla una determinada condicion.

El for tiene una variable que va cambiando, y esta es i. Es importante entender el comportamiento de esta. Recordemos del apartado anterior que el valor i se va incrementando a medida que va iterando. 

```javascript
for(var i = 0; i < 4; i++) {
   //Aca adentro escribo las instrucciones que quiero repetir
}
```

> Sabiendo esto escribí una función `pasitoApasito`, que imprime 5 veces el contenido de i.
Por ejemplo: 
> 
> ```javascript
> ム pasitoApasito()
> "01234"
> ```
> Esto hizo un console.log(valor) por cada iteracion.