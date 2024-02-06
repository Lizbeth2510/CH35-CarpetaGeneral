-- Sentencias*querys/comandos basicos de SQL

-- Mostrar las bases de datos almacenadas

SHOW DATABASES;

-- Para usar una base de datos en especifico 
USE ch35;

-- Mostrar las tablas 
SHOW TABLES;

/*
DML COMANDOS
SELECT Nos va a mostrar la informacion que solicitemos 
*/

SELECT * FROM productos;

/*
DLM COMANDOS
SELECT Nos va a mostrar la información que solicitemos 
SELECT nos permite recuperar datos de una base de datos. Es una de las operaciones mas comunes.
SELECT + datosABuscar + From dondeVoyABuscar + condicion o filtro especial
*/
-- Consulta de toda la informacion de una tabla (usando el asterisco)
SELECT * FROM  productos;

-- Mostrar un atributo en especifico de mi tabla productos 
SELECT NOMBRE FROM productos; 
-- podría ser id, descripción, precio o stock 

-- Consultar multiples datos de una tabla, la ',' nos ayuda a selecionar varios campos que necesitamos 
SELECT nombre, descripcion, stock FROM productos; 

-- para filtrar informacion se debe de usar SELECT más la clausula WHERE
-- Quiero que de mi tabla productos me traigas aquel producto que su nombre sea "Taza Clásica Banca", ademas de que me traiga el nombre, quiero el stock en el que su stock sea 100
SELECT * FROM productos
WHERE nombre = "Taza Clásica Blanca" AND stock = 100; 

-- Consulta del precio de un producto
SELECT nombre, descripcion, stock, precio FROM productos
WHERE precio < 50;

-- Consulta del precio de un producto
SELECT nombre, descripcion, stock, precio FROM productos
WHERE precio > 10;

-- Consulta del stock de un producto 
SELECT nombre, descripcion, stock, precio FROM productos
WHERE stock <= 100 AND precio > 10;

-- ----------------------------------------------------------
-- Funcion Min() para calcular el minimo de una columna / AS --> Acomoda las cantidades de forma ascedente
SELECT MIN(stock) AS 'Stock minimo' FROM productos;

-- Funcion Min() para calcular el minimo de los precios 
SELECT MIN(precio) AS 'Stock minimo' FROM productos;

-- Funcion Max() para calcular el minimo de una columna 
SELECT Max(stock) AS 'Stock maximo' FROM productos;

-- Funcion Max() para calcular el minimo de una columna 
SELECT Max(precio) AS 'precio maximo' FROM productos;

-- Function COUN para calcular el total de productos 
SELECT COUNT(*) AS 'Total de productos' FROM productos; 

-- Funcion para calcular el promedio de los valores del precio 
SELECT AVG (precio) AS 'Promedio del precio' FROM productos;

-- Funcion para sumar los precios 
SELECT SUM(precio) AS 'Suma de los precios' FROM productos;
-- ------------------------

DESCRIBE productos;
-- JOINS clausulas que se utilizan para combinar dos o mas tablas en una columna relacionada 

-- Inner Join toma dos tablas y hace una o trabaja a partir de su co-relacion 

-- Consulta para obtener el nombre del cliente y los detalles del pedido

SELECT pedidos.id_pedidos, cliente.nombre, pedidos.fecha, pedidos.estado_pedido
FROM pedidos
INNER JOIN cliente on pedidos.cliente_id_cliente = cliente.id_cliente
WHERE pedidos.fecha = '2024-01-01';

-- Consulta para clientes y pedidos 
-- (Left join)
SELECT cliente.nombre, pedidos.id_pedidos
FROM cliente
LEFT JOIN pedidos ON cliente.id_cliente = pedidos.cliente_id_cliente;


-- Consulra para productos  y pedidos 
-- (Right join)
SELECT productos.nombre, detalle_pedido.cantidad, detalle_pedido.precio_unitario
FROM detalle_pedido
RIGHT JOIN productos ON detalle_pedido.productos_id_productos = productos.id_productos;

-- Consulta utilizando Where IN (es un operador que nos va a permitir comprobar si un valor se encuentra dentro de un conjunto de datos)

SELECT *
FROM pedidos
WHERE cliente_id_cliente IN (2, 1, 4);

-- Consulta utilizando Where Between ( es un operador que nos va a permitir seleccionar filas seleccionando un rango especifico de algun valor que este entre dos rangos especificos)
SELECT *
FROM pedidos
WHERE Fecha BETWEEN '2023-01-01' AND '2023-12-31';

-- Consulta utilizando Where Like ( es un operador que nos permite seleccionar o buscar registros especificos con el simbolo %)
SELECT nombre
FROM cliente
WHERE nombre LIKE 'D%'; -- La letra es para los nombres que empiecen con esa letra 

-- Consulta utilizando where IN y Between
SELECT * FROM pedidos WHERE fecha BETWEEN '2022-01-01' AND '2024-02-06' AND cliente_id_cliente IN (2, 4);

-- Consulta utilizando LIKE y ORDER BY
SELECT * FROM cliente WHERE nombre LIKE 'M%' ORDER BY apellido;

-- Como eliminar los datos de una tabla  
DELETE FROM clientes;