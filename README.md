# Configuración del Entorno de Desarrollo para Laravel y React

Practica N°3 asignatura Introducción al desarrollo web/movil.Se utilizo como backend Laravel y como frontend React Native.


## 1. Entorno de trabajo

- [Git 2.38.1 o superior.](https://git-scm.com/)
- [Xampp 8.2.12 (**opcional**, se puede utilizar otra base de datos MySQL)](https://www.apachefriends.org/es/index.html)
- [Composer 2.5.8 o superior](https://getcomposer.org/)
- [Node.js  18.12.1 o superior](https://nodejs.org/en)
- Se requiere crear una base de datos MySQL
- Android studio (en caso de utilizarlo)
- Expo go (se instala en el celular dentro de play store en caso de utilizarlo)

Observación: Se utilizo Xampp como base de datos, este ya trae PHP,
en caso de requerirlo se debe tener PHP 8.2.4 o superior

## 2. Empezando

- Clonar el repositorio a trabajar

```bash
git clone https://github.com/skeret2/Practica3-IWM.git
```

## 3. Configuración de base de datos

Se debe copiar el contenido de **.env.example** para insertarlo en un archivo **.env** que debes crear

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_base_datos
DB_USERNAME=root
DB_PASSWORD=
```

*Los datos anteriores se deben editar según las credenciales de la base de datos creada anteriormente.*

## 4. Dependencias de Laravel

Ejecutar los siguientes comandos que se presentan a continuación dentro de la carpeta Backend-Laravel

```bash
cd Back-laravel #nos posicionamos en la raiz del backend
composer install
php artisan key:generate #genera la clave de aplicación
```

## 5. Migraciones en laravel

```bash
php artisan migrate
```

## 6. Ejecutar los seeders
```bash
php artisan db:seed
```

## 7. Levantar Laravel
```bash
php artisan serve --host=0.0.0.0
```

## 8. Dependencias de React

Ejecutar los siguientes comandos dentro de la carpeta front-mobile
```bash
cd frontend-react #nos posicionamos en la raiz del frontend
npm install
```
## 9. Configurar archivo index.js  de la carpeta helpers
Ver la ip publica en CMD con 
```bash
ipconfig IPV4
```
Copiar la ip publica en el archivo index.js en src/helpers remplazar la url base

## 10. Levantar react native con android studio
```bash
npx expo start
```
*Presionar la* a

## 11. Levantar react native con expo go
Con expo go 
```bash
npx expo start
```
