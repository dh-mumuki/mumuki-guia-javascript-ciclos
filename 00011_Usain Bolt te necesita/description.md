Para las proximas olimpiadas Usain Bolt para calcular su dieta necesita un simulador que dado un entrenamiento le diga cuantas necesita consumir para poder realizar un ejercicio de trote.

Para esto tenemos que crear la funcion caloriasDeTrote() que recibe por parametro los metros que tiene que recorrer.
Las calorias se calculan de la siguiente manera:
1) 5 calorias cada 10 metros * la vuelta que se da. Ya que cada vez las vueltas consumen mas y mas calorias.

> Sabiendo esto escribí una función `caloriasDeTrote()`, que toma como parámetro X un valor numerico que representa la cantidad de metros a correr
Por ejemplo: 
> 
> ```javascript
> ム caloriasDeTrote(20)
> "15" donde 5 son de la primera vuelta y 10 de la segunda
> ```