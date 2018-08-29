# Babel Techie #

## ¿Qué es? ##
[BabelJS](https://babeljs.io/docs/en) es una libreria que se usa en el proceso de compilación de aplicaciones JS para transformar la sintaxis del código fuente de nuetra app desde versiones nuevas de ECMAScript a versiones más antigüas.

## ¿Para qué sirve? ##
Durante este proceso de conversión de código, Babel puede también agregar archivos que extienden las librerias de JS que traen los navegadores de forma tal que soporten el uso de objetos globales introducidos en nuevas versiones de JS.

### Plugins  y Presets ###
Para permitir el uso de nueva sintaxis en browsers que no la soportan, Babel usa **Plugins**.
Un **Plugin** es un un componente que se encarga de parsear el código JS de entrada y generar un código JS de salida *transformado*.

Si no se instala ningún plugin, babel no hace nada con los JS más que generar un archivo de salida en un lugar configurado previamente.

Un ejemplo de plugin es **@babel/plugin-transform-arrow-functions** que permite transformar algo como esto
```JavaScript
var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]
```
a esto
```JavaScript
var a = function () {};
var a = function (b) {
  return b;
};

const double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]
```

---

Babel provee de una serie de plugins ya desarrollados para transformar nuestro JS. En general se suele usar varios de estos 
## ¿Cómo se instala? ##
#### Prerequisitos ####
* [Node.js](https://nodejs.org/es/)

Luego de tener instalado node.js, dentro de la carpeta del proyecto en el que queremos usar webpack debemos inicializar npm para que gestione nuestras dependencias sobre librerias (entre ellas, webpack):
```
npm init -y
```

Usamos la opción *-y* para aceptar las opciones por defecto.
Esto nos creará un archivo **package.json** en nuestro proyecto.

Con el package.json creado en nuestro proyecto ya podemos instalar webpack:

```
npm install webpack webpack-cli --save-dev
```