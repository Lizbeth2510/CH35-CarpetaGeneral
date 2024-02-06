-- Creamos base de datos de ch35
-- Creamos comentarios de esta manera, esto solo para una linea
/*Estos son comentarios 
multilinea
*/
CREATE database ch35;

-- MySQL Workbench Forward Engineering

USE `ch35` ;

-- -----------------------------------------------------
-- Table `ch35`.`perfil_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`perfil_cliente` (
  `id_perfil_cliente` INT NOT NULL AUTO_INCREMENT,
  `fecha_registro` DATE NOT NULL,
  `preferencias` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id_perfil_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `apellido` VARCHAR(80) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(250) NOT NULL,
  `perfil_cliente_id_perfil_cliente` INT NOT NULL,
  PRIMARY KEY (`id_cliente`, `perfil_cliente_id_perfil_cliente`),
  INDEX `fk_cliente_perfil_cliente1_idx` (`perfil_cliente_id_perfil_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_perfil_cliente1`
    FOREIGN KEY (`perfil_cliente_id_perfil_cliente`)
    REFERENCES `ch35`.`perfil_cliente` (`id_perfil_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT(300) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `stock` INT ZEROFILL UNSIGNED NOT NULL,
  PRIMARY KEY (`id_productos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`pedidos` (
  `id_pedidos` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado_pedido` VARCHAR(100) NOT NULL,
  `total` DECIMAL(10,2) UNSIGNED NOT NULL,
  `cliente_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pedidos`),
  INDEX `fk_pedidos_cliente_idx` (`cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_cliente`
    FOREIGN KEY (`cliente_id_cliente`)
    REFERENCES `ch35`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`detalle_pedido` (
  `id_detalle_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10,2) NOT NULL,
  `descuento` DECIMAL(10,2) NOT NULL,
  `pedidos_id_pedidos` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`id_detalle_pedido`),
  INDEX `fk_detalle_pedido_pedidos1_idx` (`pedidos_id_pedidos` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_pedido_pedidos1`
    FOREIGN KEY (`pedidos_id_pedidos`)
    REFERENCES `ch35`.`pedidos` (`id_pedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_pedido_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `ch35`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`productos_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`productos_favoritos` (
  `id_productos_favoritos` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`id_productos_favoritos`, `productos_id_productos`),
  INDEX `fk_cliente_has_productos_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_productos_cliente1`
    FOREIGN KEY (`id_productos_favoritos`)
    REFERENCES `ch35`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_has_productos_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `ch35`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Insetar datos perfil_clientes (dado que es una relacion 1:1)
INSERT into perfil_cliente (id_perfil_cliente, fecha_registro, preferencias)
values (1, '2024-02-01', 'Tazas tipo Starbucks');

-- Insertar datos en tabla cliente 
INSERT INTO `ch35`.`cliente` (id_cliente, nombre, apellido, correo, direccion, perfil_cliente_id_perfil_cliente)
values (1, 'Daniel', 'Maldonado', 'daniel.maldonado@gmail.com', 'P. Sherman Wallaby no. 42, Syndey', 1);

-- Agregando productos 
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES ('Taza Clásica Blanca', 'Taza de cerámica blanca con diseño clásico.', 9.99, 100);

INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES ('Taza Clásica Blanca', 'Taza de cerámica blanca con diseño clásico.', 9.99, 100);

INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza de Viaje Acero Inoxidable', 'Taza térmica de acero inoxidable ideal para viajes.', 14.99, 50);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza conclientecliente Asa de Corazón', 'Taza de cerámica con asa en forma de corazón.', 12.99, 75);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza Grande de Colores', 'Taza grande con colores vibrantes y diseño moderno.', 11.99, 80);


/*
Tutorial rápido:
1. Copiar todo el query y pegarlo en un nuevo archivo .sql en VSCode.
2. Seleccionar el primer `mydb` y presionar ctrl+d para seleccionar todas las coincidencias
3. Escribir `ch35` para reemplazar
4. Guardar el archivo
5. Importar el sql en workbench
6. Ejecutar todo el sql
Listo
*/
