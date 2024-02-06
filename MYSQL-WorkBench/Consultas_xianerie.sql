
SELECT * FROM productos_xianeri.productos;

-- Consulta de toda la informacion de una tabla
SELECT * FROM productos;

-- Mostrar el nombre 
SELECT nombre FROM productos;

-- Mostrar el nombre y precio de mi tabla productos 
SELECT nombre, precio FROM productos; 

-- Mostrar el nombre y descripcion de mi tabla productos 
SELECT nombre, descripcion FROM productos; 

-- Consulta del precio de un producto
SELECT nombre, descripcion, precio FROM productos
WHERE precio > 100;

-- 
-- Consulta del precio de un producto
SELECT nombre, descripcion, precio FROM productos
WHERE precio < 300;

-- Consulta del stock de un producto 
SELECT nombre, descripcion,imagen_path, precio FROM productos
WHERE nombre = "Exfoliante" AND precio < 500;

--  Funcion Min() para calcular el minimo de una columna / AS --> Acomoda las cantidades de forma ascedente
SELECT MIN(stock) AS 'stock  minimo' FROM productos;

-- Funcion Min() para calcular el minimo del precio 
SELECT MIN(precio) AS 'precio minimo' FROM productos;

-- Funcion MAX() para calcular el maximo del stock 
SELECT MAX(stock) AS 'stock maximo' FROM productos; 

-- Funcion MAX() para calcular el maximo del precio
SELECT MAX(precio) AS 'precio maximo' FROM productos; 

-- funcion para contar el numero de elementos en productos 
SELECT COUNT(*) AS 'numero total de productos' FROM productos;

-- Funcion para calcular el promedio del precio de los productos 
SELECT AVG(precio) AS 'el promedio del precio de los productos' FROM productos;

-- Funcion para calcular el promedio del stock de nuestros productos 
SELECT AVG (stock) AS 'promedio del stok del los productos de xianerie' FROM productos;

-- Funcion para sumar el precio de todos los productos
SELECT SUM(precio) AS 'suma del precio de los productos' FROM productos;

-- Funcion para calcular el total de piezas existentes en xianerie 
SELECT SUM(stock) AS 'total de productos en xianerie' FROM productos;
