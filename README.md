# 🧪 Parcial I – Arquitectura de Software

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

El objetivo de este parcial es presentar y organizar, mediante una arquitectura modular en Angular, los principales conceptos teóricos estudiados durante el curso de Arquitectura de Software.

## 👥 Integrantes

| Nombre | Módulo desarrollado |
|---|---|
| Juan Diego Rodríguez | Arquitectura de Software |
| David Mora | Principios de Arquitectura de Software |
| Juan Pablo Devia | Sistemas de Diseño |

## 🧩 Módulos del proyecto

La aplicación cuenta con una barra de navegación superior que permite desplazarse entre los siguientes módulos:

- **Arquitectura de Software** (`/arquitectura-software`): fundamentos, atributos de calidad, alineación con el negocio y el rol del arquitecto.
- **Principios de Arquitectura de Software** (`/principios-arquitectura`): modularidad, cohesión, acoplamiento y separación de responsabilidades.
- **Sistemas de Diseño** (`/sistemas-diseno`): componentes reutilizables y consistencia visual.

Cada módulo mantiene una estructura independiente con su propio servicio, interfaz de tipado, página principal y componente de presentación, siguiendo el patrón trabajado durante el curso (datos centralizados en el Core, consumidos mediante un servicio y mostrados en la vista).

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: `ng version`

## ▶️ Iniciar el Proyecto en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto (donde se encuentra el archivo `package.json`).

### 2️⃣ Instalar dependencias

```
npm i
```

### 3️⃣ Ejecutar el proyecto

```
npm run start
```

o

```
ng serve
```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`

## 📘 Generar documentación con Compodoc

Este comando genera un sitio estático con la documentación técnica del proyecto, a partir de los comentarios JSDoc en el código fuente (componentes, interfaces, tipos, módulos y diagramas de dependencias).

```
npm run compodoc
```

Para verlo servido como sitio web navegable:

```
npx compodoc -p tsconfig.doc.json -s
```

## ⚙️ Generación de Archivos con Angular CLI

A continuación se presentan los comandos más utilizados para generar módulos y componentes.

### 📦 Generar un módulo con archivo de rutas

```
ng g m [ruta]/[nombre-modulo] --routing
```

#### Ejemplo:

```
ng g m modules/arquitectura-software --routing
```

#### Archivos Generados

```
src/app/modules/arquitectura-software
├── arquitectura-software-module.ts
└── arquitectura-software-routing-module.ts
```

### 🧩 Generar un componente (con carpeta propia)

```
ng g c [ruta]/[nombre-componente] --standalone=false
```

#### Ejemplo:

```
ng g c modules/arquitectura-software/components/content-arquitectura --standalone=false
```

#### Archivos Generados

```
src/app/modules/arquitectura-software/components/content-arquitectura/
├── content-arquitectura.html
├── content-arquitectura.scss
├── content-arquitectura.spec.ts
└── content-arquitectura.ts
```

## 🎓 Observaciones Importantes

- En este proyecto NO se utilizan componentes standalone.
- Todos los componentes deben pertenecer a un NgModule.
- La información de cada módulo está sintetizada por los estudiantes a partir del contenido visto en clase, no copiada literalmente de las diapositivas.
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad.
- Usar Angular CLI evita errores de configuración manual.
