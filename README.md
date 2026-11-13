# Gestor de contraseñas

Mini-proyecto de práctica en HTML, CSS y JavaScript puro (sin dependencias). Permite registrar usuario, correo, contraseña y una descripción, y los muestra en una tabla. Los registros persisten entre sesiones usando `localStorage`.

> **Aviso:** es un proyecto de práctica para uso local. Las contraseñas se guardan en **texto plano** en el navegador. No lo uses para credenciales que no quieras exponer.

## Características

- Formulario con validación nativa (`required`, `type="email"`).
- Tabla que se llena dinámicamente desde JavaScript.
- Persistencia de los registros con `localStorage`.
- Sin frameworks ni paso de compilación.

## Estructura

```
index.html   Interfaz: formulario, tabla y estilos
main.js      Lógica: leer, pintar y guardar registros
```

## Cómo ejecutarlo

No requiere instalación. Hay dos formas:

1. **Con Live Server (VS Code):** abre la carpeta, clic derecho en `index.html` → *Open with Live Server*.
2. **Con cualquier servidor estático** que sirva la carpeta.

### Importante: usa siempre la misma URL

Los datos se guardan en el `localStorage` del navegador, y este está ligado al **origen exacto**: protocolo + host + puerto. Estos orígenes son **distintos** para el navegador, aunque apunten al mismo servidor:

| URL | ¿Mismos datos? |
|---|---|
| `http://localhost:5500` | Origen A |
| `http://127.0.0.1:5500` | Origen B (vacío si guardaste en A) |
| `http://localhost:5501` | Origen C (por ejemplo, si Live Server cambió de puerto) |
| `file:///.../index.html` | Origen D |

Si cambias de una URL a otra verás la tabla vacía. **Los datos no se borraron**: siguen guardados bajo el origen anterior. Vuelve a abrir la URL que usabas.

Recomendaciones:

- Elige una URL (por ejemplo `http://localhost:5500`) y úsala siempre; guárdala como favorito.
- Cierra otras instancias de Live Server para que no cambie al puerto 5501 o siguiente.
- Fija el host y el puerto en la configuración de Live Server (`liveServer.settings.host` y `liveServer.settings.port`).

## Dónde se guardan los datos

- **Clave:** `registros` en `localStorage`.
- **Formato:** arreglo de arreglos en JSON, donde cada registro es `[usuario, correo, contrasena, descripcion]`.

Para inspeccionarlos o respaldarlos manualmente: `F12` → pestaña **Application** → **Local Storage** → tu origen → clave `registros`.

Los datos se pierden si:

- Borras los datos del sitio desde el navegador.
- Usas una ventana de incógnito.
- El navegador está configurado para limpiar datos al cerrar.

Tampoco se comparten entre navegadores ni equipos, y OneDrive u otros servicios de sincronización no los respaldan.

## Limitaciones conocidas

- Contraseñas en texto plano, tanto en la tabla como en `localStorage`.
- No se puede editar ni eliminar un registro.
- Los registros son arreglos posicionales: agregar o reordenar campos dejaría desalineados los registros antiguos.
- No hay exportar ni importar, por lo que migrar entre orígenes es manual.

## Ideas para extenderlo (forks bienvenidos)

- [ ] Eliminar y editar registros.
- [ ] Guardar objetos (`{ usuario, correo, ... }`) en lugar de arreglos posicionales.
- [ ] Botones para exportar e importar los registros como `.json`, para no depender del origen.
- [ ] Cifrar las contraseñas con la Web Crypto API y una contraseña maestra.
- [ ] Ocultar la contraseña en la tabla con un botón para mostrarla.
- [ ] Alternativa con un servidor Node pequeño que guarde en un `datos.json`.
- [ ] Mostrar el origen actual (`location.origin`) en la página para detectar este problema rápidamente.

## Licencia

Pendiente de definir (por ejemplo, MIT).
