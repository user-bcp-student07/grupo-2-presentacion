usando el skill lamina-corporativa-jpg crea un HTML en presentacion\lamina-03 , reemplazando si existe, que haga:

# Titulo: Arquitectura de la Billetera Digital

Un flujo de componentes de izquierda a derecha en el siguiente orden

## Usuario
Pon un icono de usuario de algun sitio publico y consistente con el estilo de la lamina


## Billetera
(a la derecha de Usuario)
(flecha desde Usuario hacia Billetera)
- Aplicación Web
- React
- Responsive

## API Billetera
(a la derecha Billetera)
(flecha desde Billetera hacia API Billetera)
- API UX específico para el canal Billetera
- Python 3.15
- FastAPI
- uv (gestor de paquetes)

## Logs
(Debajo a la izquierda de API Billetera)
(flecha vertical desde API Billetera hacia Logs)
- Registro de transacciones

## Base de Datos
(Debajo a la derecha de API Billetera, mismo nivel que Logs)
(flecha vertical desde API Billetera hacia Base de Datos)
- SQLite (hackaton)

## API RENIEC
(A la derecha de API Billetera, arriba)
(flecha desde API Billetera hacia API RENIEC)
- Validación de DNI
- Reconocimiento facial

## API Core Bancario
(A la derecha de API Billetera, abajo de API RENIEC)
(flecha desde API Billetera hacia API Core Bancario)
- Transacción de Transferencias


## API Fraudes
(A la derecha de API Core Bancario)
(flecha desde API Core Bancario hacia API Fraudes)
- Bloqueo de Tx sospechosas
