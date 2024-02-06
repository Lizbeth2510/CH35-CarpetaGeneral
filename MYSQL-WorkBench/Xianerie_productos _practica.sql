-- Crear base de datos 
CREATE database productos_xianeri;

-- MySQL Workbench Forward Engineering


USE `productos_xianeri` ;

-- -----------------------------------------------------
-- Table `productos_xianeri`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `productos_xianeri`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `imagen_path` VARCHAR(255) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `descripcion` MEDIUMTEXT NOT NULL,
  `ingredientes` MEDIUMTEXT NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`id_productos`))
ENGINE = InnoDB;






