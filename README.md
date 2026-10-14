# Pruebas unitarias con JavaScript y GitHub Actions

Ejemplo para la **Unidad II: Tipos de Pruebas**.

## Objetivo

Probar individualmente una función que calcula el importe de un platillo a partir del precio y la cantidad. Automatizar su ejecución mediante GitHub Actions.

## Requisitos

- Node.js 22 o versión compatible con `node:test`.
- Visual Studio Code (opcional; se puede usar otro editor).
- Cuenta de GitHub para la automatización.

## Estructura

```text
pruebas-unitarias-devops/
├── .github/
│   └── workflows/
│       └── pruebas-unitarias.yml
├── docs/
│   └── actividad.md
├── src/
│   └── calcularTotal.js
├── tests/
│   └── calcularTotal.test.js
├── .gitignore
├── package.json
└── README.md
```

## Ejecución local

1. Abrir la carpeta en VS Code.
2. Abrir la terminal.
3. Verificar `node --version`.
4. Ejecutar `npm test` (en PowerShell, si `npm` está bloqueado, usar `npm.cmd test`).
5. Verificar **5 tests, 5 pass, 0 fail**.

No se necesita ejecutar `npm install` porque el ejemplo utiliza exclusivamente módulos incluidos en Node.js.

## Automatización en GitHub Actions

1. Crear un repositorio nuevo en GitHub.
2. Subir todo el proyecto, incluida la carpeta oculta `.github`.
3. Abrir el repositorio > **Actions**.
4. Seleccionar la ejecución **Pruebas unitarias** y comprobar que el trabajo **pruebas** aparece exitoso.
5. Abrir el trabajo y mostrar la etapa **Ejecutar pruebas unitarias**.

El flujo se activa con cada `push` y `pull_request`.

## Evidencias sugeridas

1. Código de `src/calcularTotal.js`.
2. Cinco casos en `tests/calcularTotal.test.js`.
3. Terminal de VS Code con las cinco pruebas aprobadas.
4. Archivo `.github/workflows/pruebas-unitarias.yml`.
5. Pestaña **Actions** con la ejecución en verde.
6. Detalle de la etapa `Ejecutar pruebas unitarias` con resultado exitoso.

Consulta `docs/actividad.md` para la introducción, el procedimiento y las conclusiones.
