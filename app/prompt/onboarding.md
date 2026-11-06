usa el skill /crear-pantalla.web para generar una aplciacion web estatica en "app/mobile" con la siguiente navegacion y comportamiento

# Login
Titulo: "Billetera Digital"
- Debe permitir el login de un usuario existente o un link para crear un usuario nuevo (pantalla "Registro")
- Las credenciales de ingreso son:
  - clave de seis digitos (pues se asume que ya esta configurado el usuario)
  - como alternativa identificarse con huella biometrica

# Registro
Le pedire que escanee su DNI
Le pedire que escanee su rostro
Y habra una validacion de si su rostro es valido

# Datos Generales
Una vez loggeado con exito, debe mostrar
- Saldo actual
- Lista de cuatro contactos predeterminados
- Opcion para elegir uno de los contactos


# Transferencia
Una vez elegido el Contacto, debes pedir:
- Monto a transferir
Una vez que se confirme la accion de transferir, debes validar
- Que el monto diario no supere 100 soles
- Que el monto por transferencia no supere 20 soles

# Exito
Mostrar una pantalla de exito con los datos de la operacion

# Casos de Prueba
Con el contacto "Ana Torres" debe funcionar pero con las validaciones de montos indicadas arriba
Con el contacto "Luis Paredes" cuando intentes transferir , la accion siempre debe fallar pues hubo un error en el Banco, debe permitir reintentar hasta tres veces, al cuarto intento debe notificar que ya no se puede mas

Agrega para que cuando elija el Contacto "Maria Quispe" siempre falle por que el Banco me responde porque no esta afiliado