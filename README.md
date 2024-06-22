# Proyecto Backend

Este es un proyecto backend que proporciona una API para gestionar productos y carritos de compras.

## Requisitos

- Node.js
- npm
- MongoDB

## Instalación

1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Fijate de que MongoDB esté en funcionamiento.
5. Ejecuta `npm start` para iniciar el servidor.

## Uso

### Crear un producto

**Endpoint:** `POST /api/products`

**Ejemplo de cuerpo de solicitud:**

```json
{
  "name": "Producto 1",
  "description": "Descripción del Producto 1",
  "price": 10.99
}
```

## Obtener todos los productos
Endpoint: GET /api/products

## Crear un carrito
Endpoint: POST /api/carts

## Agregar un producto a un carrito
Endpoint: POST /api/carts/:cid/products/:pid

Reemplaza :cid con el ID del carrito y :pid con el ID del producto.

## Obtener los productos de un carrito
Endpoint: GET /api/carts/:cid

Reemplaza :cid con el ID del carrito.
