USE tienda;

-- Insertar tipos de usuario
INSERT INTO tipo_usuario (nombre, descripcion) VALUES
('invitado', 'Usuario con acceso limitado para prueba'),
('administrador', 'Usuario con privilegios totales en el sistema'),
('cliente', 'Usuario registrado que puede realizar compras'),
('repartidor', 'Usuario encargado de entregar los pedidos');

-- Insertar usuarios
INSERT INTO usuario (correo, contrasena, codigo_verificacion, id_tipo_usuario) VALUES
('admin@ecommerce.com', 'admin123', NULL, 2),
('cliente1@ecommerce.com', 'cliente123', NULL, 3),
('repartidor1@ecommerce.com', 'repartidor123', NULL, 4);

-- Insertar clientes
INSERT INTO cliente (nombre, apellido, numero_telefono, region, distrito, direccion, id_usuario) VALUES
('Juan', 'Perez', '123456789', 'Lima', 'Miraflores', 'Av. Principal 123', 2);

-- Insertar repartidores
INSERT INTO repartidor (nombre, apellido, numero_telefono, estado, id_usuario) VALUES
('Carlos', 'Lopez', '987654321', 'activo', 3);

-- Insertar descuentos
INSERT INTO descuento (estado, fecha_inicio, fecha_fin, porcentaje, descripcion) VALUES
('activo', '2025-01-01', '2025-12-31', 10, 'Descuento de lanzamiento');

-- Insertar categorías
INSERT INTO categoria (nombre, descripcion) VALUES
('Electrónica', 'Dispositivos electrónicos y accesorios'),
('Ropa', 'Moda para hombres, mujeres y niños');

-- Insertar marcas
INSERT INTO marca (nombre, descripcion) VALUES
('Samsung', 'Marca líder en tecnología'),
('Nike', 'Marca líder en ropa deportiva');

-- Insertar productos
INSERT INTO producto (nombre, codigo, precio, cantidad, calificacion_promedio, foto, id_marca, id_categoria, id_descuento) VALUES
('Smartphone Samsung Galaxy S21', 'SGS21', 799.99, 50, 4.5, 's21.jpg', 1, 1, 1),
('Zapatillas Nike Air', 'NAIR1', 120.00, 100, 4.7, 'nike_air.jpg', 2, 2, NULL);

-- Insertar carrito de compras
INSERT INTO carrito_compra (precio_total, estado, id_cliente) VALUES
(919.99, 'en curso', 1);

-- Insertar calificaciones
INSERT INTO calificacion (cantidad, comentario, id_cliente, id_producto) VALUES
(5, 'Excelente producto!', 1, 1),
(4, 'Muy cómodas', 1, 2);

-- Insertar tipos de pedido
INSERT INTO tipo_pedido (nombre, descripcion) VALUES
('Domicilio', 'Entrega a domicilio'),
('Recoger en tienda', 'El cliente recoge el producto en tienda');

-- Insertar pedidos
INSERT INTO pedido (estado, fecha_pedido, fecha_entrega, fecha_envio, hora_entrega, hora_envio, id_tipo_pedido, id_carrito, id_repartidor) VALUES
('pendiente', NOW(), NULL, NOW(), NULL, NULL, 1, 1, 1);

-- Insertar pagos
INSERT INTO pago (metodo_pago, fecha_pago, estado, id_pedido) VALUES
('VISA', NOW(), 'en curso', 1);

-- Insertar tarjetas
INSERT INTO tarjeta (numero, fecha_vencimiento, nombre_titular, apellido_titular, cvv, id_pago) VALUES
('4111111111111111', '2026-12-31', 'Juan', 'Perez', '123', 1);
