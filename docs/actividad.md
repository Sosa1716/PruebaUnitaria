# Unidad II: Pruebas unitarias

## a) Introducción
Las pruebas unitarias verifican que una unidad pequeña de código, por ejemplo una función, produzca los resultados esperados de manera aislada. Ayudan a detectar errores tempranos y son adecuadas para automatizarse dentro del proceso de integración continua (CI).

## b) Ejemplo de código conciso
Se utiliza `src/calcularTotal.js` para calcular el importe de una comanda de restaurante multiplicando el precio unitario por la cantidad. La función también valida que el precio sea un número finito no negativo y que la cantidad sea un entero no negativo. En `tests/calcularTotal.test.js` se definen cinco pruebas: cálculo normal, cantidad cero, precio negativo, cantidad negativa y cantidad decimal.

## c) Ejecución en un entorno DevOps
Se utiliza GitHub Actions, que ejecuta las pruebas automáticamente en un runner de Ubuntu cuando se realiza un `push` o se abre o actualiza un pull request. El flujo `.github/workflows/pruebas-unitarias.yml` descarga el repositorio, configura Node.js 22 y ejecuta `npm test`.

## d) Procedimiento para reproducirlo
1. Instalar Node.js y abrir la carpeta del proyecto en VS Code.
2. Abrir una terminal y ejecutar `npm test`.
3. Verificar que las cinco pruebas finalicen exitosamente.
4. Crear un repositorio en GitHub y subir los archivos del proyecto, incluyendo `.github/workflows/pruebas-unitarias.yml`.
5. Abrir la pestaña **Actions** del repositorio.
6. Seleccionar la ejecución del flujo **Pruebas unitarias**.
7. Abrir el trabajo **pruebas** y expandir **Ejecutar pruebas unitarias** para observar el resultado.

## e) Demostración de resultados
Al ejecutar la versión entregada del proyecto en Node.js 22 se obtienen cinco pruebas aprobadas y cero fallidas. El registro de GitHub Actions se debe capturar después de ejecutar el flujo en el repositorio propio. Para mostrar qué sucede ante un error, se puede modificar temporalmente una expectativa de `225` a `220` en un test, ejecutar `npm test` para evidenciar el fallo y después restablecer `225` y repetir la ejecución para mostrar el éxito.

## f) Conclusiones
Las pruebas unitarias permiten comprobar el comportamiento correcto de funciones específicas y detectar casos inválidos antes de que afecten a otras partes del sistema. Su integración con GitHub Actions facilita que las verificaciones se ejecuten automáticamente cada vez que se envían cambios al repositorio, lo que favorece la detección temprana de errores y un proceso de desarrollo más confiable.
