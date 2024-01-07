## Axios API
1. Revisar el sitio oficial 

2. Instalar axios desde  npm ejecutando el comando:
```sh
npm i
```
3. ejecutar el proyecto en React en el navegador  ejecutando el comando:
```sh
npm run dev
```

## Manejando axios
1. En el archivo App.js, importar axios
```javascript
import axios from 'axios'
```
2. Crear la función de tipo async-await para consumir una API
3. Indicamos el evento en linea para el primer botón con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={getUsers}>
```
4. Crear la finción `postUser` de tipo async-await para enviar datos
5. Indicamos el evento en linea para el segundo botón con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={postUsers}>
```