CREATE DATABASE IF NOT EXISTS gamerhouse;
USE gamerhouse;

-- Tabla: tipo_usuario
CREATE TABLE tipo_usuario (
    id_tipo_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

-- Tabla: usuario
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    codigo_verificacion VARCHAR(45),
    id_tipo_usuario INT NOT NULL,
    FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario)
) ENGINE=InnoDB;

-- Tabla: cliente
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    numero_telefono VARCHAR(20) UNIQUE,
    foto_perfil VARCHAR(255),
    region VARCHAR(45),
    distrito VARCHAR(45),
    direccion VARCHAR(255),
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
) ENGINE=InnoDB;

-- Tabla: repartidor
CREATE TABLE repartidor (
    id_repartidor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    numero_telefono VARCHAR(20) UNIQUE,
    estado VARCHAR(45),
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
) ENGINE=InnoDB;

-- Tabla: ubicacion
CREATE TABLE ubicacion (
    id_ubicacion INT PRIMARY KEY AUTO_INCREMENT,
    latitud VARCHAR(45),
    longitud VARCHAR(45),
    velocidad VARCHAR(45),
    direccion VARCHAR(255),
    tiempo_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_repartidor INT NOT NULL,
    FOREIGN KEY (id_repartidor) REFERENCES repartidor(id_repartidor)
) ENGINE=InnoDB;

-- Tabla: categoria
CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

-- Tabla: marca
CREATE TABLE marca (
    id_marca INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

-- Tabla: descuento
CREATE TABLE descuento (
    id_descuento INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(45),
    fecha_inicio DATETIME,
    fecha_fin DATETIME,
    porcentaje INT,
    descripcion TEXT
) ENGINE=InnoDB;

-- Tabla: producto
CREATE TABLE producto (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    codigo VARCHAR(9) UNIQUE NOT NULL,
    precio DOUBLE NOT NULL,
    cantidad INT NOT NULL,
    calificacion_promedio DOUBLE DEFAULT 0,
    foto VARCHAR(255),
    id_marca INT NOT NULL,
    id_categoria INT NOT NULL,
    id_descuento INT,
    FOREIGN KEY (id_marca) REFERENCES marca(id_marca),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    FOREIGN KEY (id_descuento) REFERENCES descuento(id_descuento)
) ENGINE=InnoDB;

-- Tabla: carrito_compra
CREATE TABLE carrito_compra (
    id_carrito INT PRIMARY KEY AUTO_INCREMENT,
    precio_total DOUBLE NOT NULL,
    estado VARCHAR(45),
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
) ENGINE=InnoDB;

-- Tabla: calificacion
CREATE TABLE calificacion (
    id_calificacion INT PRIMARY KEY AUTO_INCREMENT,
    cantidad INT NOT NULL,
    comentario TEXT,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
) ENGINE=InnoDB;

-- Tabla: pedido
CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(45),
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega DATETIME,
    fecha_envio DATETIME,
    hora_entrega TIME,
    hora_envio TIME,
    id_tipo_pedido INT NOT NULL,
    id_carrito INT NOT NULL,
    id_repartidor INT,
    FOREIGN KEY (id_tipo_pedido) REFERENCES tipo_pedido(id_tipo_pedido),
    FOREIGN KEY (id_carrito) REFERENCES carrito_compra(id_carrito),
    FOREIGN KEY (id_repartidor) REFERENCES repartidor(id_repartidor)
) ENGINE=InnoDB;

-- Tabla: tipo_pedido
CREATE TABLE tipo_pedido (
    id_tipo_pedido INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    descripcion TEXT
) ENGINE=InnoDB;

-- Tabla: pago
CREATE TABLE pago (
    id_pago INT PRIMARY KEY AUTO_INCREMENT,
    metodo_pago VARCHAR(45) NOT NULL,
    estado VARCHAR(45) NOT NULL,
    fecha_pago DATETIME NOT NULL,
    id_pedido INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido)
) ENGINE=InnoDB;

-- Tabla: tarjeta
CREATE TABLE tarjeta (
    id_tarjeta INT PRIMARY KEY AUTO_INCREMENT,
    numero VARCHAR(16) NOT NULL,
    fecha_vencimiento DATETIME NOT NULL,
    nombre_titular VARCHAR(45) NOT NULL,
    apellido_titular VARCHAR(45) NOT NULL,
    cvv VARCHAR(3) NOT NULL,
    id_pago INT NOT NULL,
    FOREIGN KEY (id_pago) REFERENCES pago(id_pago)
) ENGINE=InnoDB;
