# Paradigmas de programación

## Concepto
Un **paradigma en programación** es un modelo básico de construcción de programas. Este modelo permite producir programas conforme con unas reglas especificas, como por ejemplo, construir el programa mediante una secuencia de instrucciones que reciben uno o mas parametros de entrada y producen una salida.

Dentro de los paradigmas exiten muchos modelos, los cuales estan agrupados como se muestra a continuación:

1. **Paradigmas procedimentales o de operación**:
Se caracterizan por describir paso a paso el modo de construcción de una solucioón. Por ejemplo, si se desea calcular el area de la funcion *f(x) = 3cos(x)* en el rango de *[0,pi]* entonces matematicamente la solución es realizar la integral de la función en el rango descrito. Sin embargo, para aplicar este paradigma se deberia inicialmente especificar paso a paso como se debe solucionar la integral. Esto es, por ejemplo, a traves de una solución numerica que corresponde a la suma de trapezoides que abarcarian el area en el rango indicado de la funcion *f(x)*. En otras palabras, se debe especificar la secuencia computacional que ejecuta etapa por etapa para resolver el problema. Dentro de este paradigma se encuentran se pueden definir dos formas para resolver problemas: *Paradigma imperativo* y el *paradigma orientado a objetos*. El *paradigma imperativo* se caracteriza por seguir una secuencia de instrucciones, es decir, el programa sigue una secuencia ordenada de pasos: inicialización de variables, iteraciones, condiciones, modificación del estado, y finalmente la salida del resultado si es el caso. Ademas el programa cuenta con uno o mas estados donde las variables cambian su estado o su valor en cada paso. En algunos programas las variables sufren mutuaciones, es decir la(s) variable(s) se actualiza (mutación) como consecuencia de un procedimiento tales como un cambio de valor dado por un ciclo, condicion u operación aritmetica o logica. En *imperativo.ts* se muestra un ejemplo del paradigma imperativo.
Por otro lado, el *paradigma orientado a objetos* permite modelar y gestionar datos en un sistema, promoviendo la reutilización de código y la modularidad. En *estudiante.java* se muestra un ejemplo del paradigma orientado a objetos. Para ello sigue las siguientes propiedades:
* Encapsulamiento: Las propiedades de la clase están encapsuladas y solo accesibles a través de métodos públicos (getters y setters).
* Abstracción: La clase abstrae el concepto de un estudiante con sus propiedades y comportamientos propios de la clase.
* Herencia: La clase puede obtener propiedades de otras clases heredando sus caracteristicas.
* Polimorfismo: Permite que objetos de diferentes clases se traten de manera uniforme mediante una interfaz común o una clase base común.

2. **Paradigmas declarativos**:
Se centra basicamente en describir qué se quiere lograr, en lugar de cómo lograrlo. En este paradigma, se especifican las relaciones y propiedades deseadas de los resultados, y el lenguaje de programación se encarga de determinar cómo obtener esos resultados. Un ejemplo comun de lenguajes declarativos incluyen SQL para bases de datos o lenguajes de consulta como XQuery para XML. Sin embargo, esto no implica que no se pueda implementar este paradigma usando lenguajes menos comunes como Typescript. Por ejemplo, metodos de alto nivel como *filter* o *map* permiten obtener el resultado sin tener tan presente como se haria el proceso internamente.
En *declarativo.sql* se muestra un ejemplo del paradigma declarativo.

3. **Paradigma funcional**:
Se basa en funciones puras, que no tienen efectos secundarios y siempre producen el mismo resultado para los mismos argumentos. Promueve la inmutabilidad y el uso de funciones de orden superior. Un ejemplo de este paradigma se muestra en *sumacuadrados.js*

* Funciones puras es decir sin efectos secundarios y con valores de retorno consistentes.
* Inmutabilidad donde las variables no cambian su valor una vez asignadas.
* Funciones de orden superior o funciones que pueden tomar otras funciones como argumentos o devolverlas como resultados.
* Expresiones en lugar de instrucciones.

4. **Paradigma logico**:
Se basa en la lógica formal y se utiliza para expresar relaciones y reglas sobre problemas específicos. Uno de los lenguajes más comunes que utilizan el paradigma lógico es Prolog (Programación en Lógica). Se inicia definiendo los "Hechos" donde se establecen las relaciones y finalmente se definen reglas para inferir nuevas relaciones a partir de los hechos iniciales. Un ejemplo de este paradigma se muestra en *parentesco.prolog*.

5. **Paradigma reactivo**:
Se centra en la programación de sistemas que reaccionan a eventos o cambios en el entorno de manera asíncrona. Este paradigma es comúnmente utilizado en el desarrollo de interfaces de usuario y sistemas concurrentes, y se basa en la idea de flujos de datos y la propagación del cambio. En la carpeta *reactivo* se encuentra un ejemplo. Algunas caracteristias son: 
- Programación Basada en Eventos donde el programa reacciona a los eventos, sean clics, drags, moves entre otros.
- Flujos de Datos Asíncronos donde los eventos son manejados como flujos de datos asíncronos.
- Uso de Observables donde se utiliza observables para representar flujos de eventos.
- Transformación y Propagación del Cambio  donde los eventos se transforman en coordenadas y se propagan a una interfaz de usuario o hacia otro programa.