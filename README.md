# SAMI SHOP REST API

Este proyecto es un servicio API desarrollado con Typescript, Express, MongoDB, Bcrypt, JWT. Maneja autenticación y autorización
de usuarios basados en roles, el tiempo de sesion dura 24 horas y tiene un limite maximo de 3 intentos para iniciar sesion. para poder
hacer las respectivas pruebas utilizar el siguiente usuario:

  - email: admin@hotmail.com
  - password: admin

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- Node.js
- npm, yarn o pnpm

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone git@github.com:jaggervlad/backend-samishop.git
   cd backend-samishop
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar entorno de desarrollo:**
   ```bash
   npm run dev
   ```

## Estructura del Proyecto
```sql
tu-proyecto/
|-- src/
|   |-- lib/
|   |-- middlewares/
|   |-- services/
|   |-- utils/
|   |-- app.ts
|   |-- index.ts
|   |-- routes.ts
|   |-- types.ts
|-- ...
```

## Endpoints

### Registrar nuevos usuarios  `POST /api/auth/register`
- **Descripción:** Registrar nuevos usuarios.

 ```json
  {
    "name": "Sebastian Acosta",
    "username": "seacal",
    "email": "seacal.pe@gmail.com",
    "password": "password-supersegura"
  }
  ```

### Iniciar Sesión  `POST /api/auth/login`
- **Descripción:** Iniciar sesión en el servidor.

 ```json
  {
    "email": "seacal.pe@gmail.com",
    "password": "password-supersegura"
  }
  ```

### Obtener uruarios  `GET /api/users`
- **Descripción:** Ruta protegida para poder ver usuarios. para probarla primero debes iniciar sesión y poner el token de logun en el header de Authorization: Bearer {{token}}


