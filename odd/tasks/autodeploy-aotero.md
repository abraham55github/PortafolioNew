# Autodespliegue a aotero.dev vía GitHub Actions

Branch: ci/autodeploy-aotero · Delivery: single-pr · Runner de pruebas: n/a (sitio estático, sin test runner configurado)

## Specs

- S1: "esto lo tengo desplegado en aotero.dev quiero hacerle un autodespliegue cuanto toque main tambien seria un github actions para cuando un cambio caiga en main se actualice la web"
- S2 (derivado de la arquitectura real confirmada por SSH): el sitio lo sirve el contenedor `aotero-hub-web-aotero-1` (nginx:alpine) definido en `~/infra/docker-compose.yml` del VPS, montando `~/infra/sites/aotero/dist` (solo lectura) como `/usr/share/nginx/html`. No hay build ni git en el servidor para este sitio.
- S3: el workflow debe dispararse únicamente con push a `main`, compilar con `npm run build` y sincronizar `dist/` por SSH/rsync a `~/infra/sites/aotero/dist` en el VPS, sin tocar `docker-compose.yml` ni reiniciar el contenedor (nginx sirve archivos estáticos nuevos sin reinicio).
- S4: autenticación SSH vía GitHub Secrets `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY` (el usuario ya los tiene listos para añadir al repo).

## Tasks

- T1 (S1-S3): crear `.github/workflows/deploy.yml` (build + rsync). Ruta: inline. Commit: pendiente.
- T2 (S4): documentar en el PR/commit los 3 secrets que el usuario debe configurar en GitHub. Ruta: inline.

## Log

- L1 (2026-11-26): Petición original del usuario (ver S1).
- L2 (2026-11-26): Exploración por SSH (autorizada por el usuario, que compartió host/usuario/clave) confirmó la arquitectura real: `~/infra/docker-compose.yml`, `~/infra/sites/aotero/dist`, `default.conf` con `try_files ... /index.html`. Se descartó Dockerizar el sitio (como en `finanzas-personales`) porque añadiría complejidad innecesaria para un sitio puramente estático; se optó por rsync directo al volumen ya montado.
- L3 (2026-11-26): Hallazgo de seguridad no relacionado, reportado al usuario: tokens de GitHub en texto plano dentro de `~/.bash_history` del servidor (`github_pat_...` x2, `ghp_...`). No se usaron. Pendiente de que el usuario decida revocarlos.
- Risk: item 5 (CI/deploy) — pipeline de despliegue a producción.
