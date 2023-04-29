# Tienda de productos

# Endpoints API Products


### GET /health

Verifica el estado del servidor.

### GET /

Ruta inicial de la aplicación.

### GET /api/v1/products/list


Obtiene la lista completa de productos almacenados en la base de datos.
     
Ejemplo:

```     
GET http://localhost:3000/api/v1/products/list
```

### GET /api/v1/products/list/:id

Obtiene un producto por su ID único.

Ejemplo:
```
GET http://localhost:3000/api/v1/products/list/6154ab3124241b06d16a8a77
```


### POST /api/v1/products/create

Crea un nuevo producto en la base de datos.
Ejemplo:

```
POST http://localhost:3000/api/v1/products/create
Content-Type: application/json

{
    "name": "Producto de ejemplo",
    "author": "Autor de ejemplo",
    "category": "Categoría de ejemplo",
    "description": "Descripción de ejemplo",
    "price": 19.99,
    "pages": 100,
    "availlableUnits": 10
}
```


### PATCH /api/v1/products/update/:id

Actualiza un producto existente por su ID único.
Ejemplo:

```
PATCH http://localhost:3000/api/v1/products/update/6154ab3124241b06d16a8a77
Content-Type: application/json

{
    "price": 29.99,
    "availlableUnits": 5
}
```

### DELETE /api/v1/products/delete/:id

Elimina un producto por su ID único.
Ejemplo:

```
DELETE http://localhost:3000/api/v1/products/delete/6154ab3124241b06d16a8a77
```


## Uso del Mongoose y Joi

En el archivo models.js se define el modelo de la colección "products" utilizando la librería Mongoose.
En cada endpoint se utiliza una función de Mongoose para realizar operaciones sobre la base de datos, como find(), findById(), create(), findByIdAndUpdate(), y findByIdAndDelete().
Además, se utilizan middlewares de validación de datos implementados con Joi para validar la entrada de datos antes de insertar o actualizar un producto.