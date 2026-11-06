usando el skill lamina-corporativa-jpg crea un HTML en presentacion\lamina-02 , reemplazando si existe, que haga:

Referencia visual de estructura: temp\ppt2.jpg (solo la distribución; usar la paleta, tipografía y estilos del skill, no los colores del JPG)

# Eyebrow: Cómo lo construimos
# Titulo: Un equipo de agentes, con control humano

## Flujo de etapas
Una fila horizontal de 6 etapas de izquierda a derecha, todas del mismo tamaño, unidas por un chevron (›) o flecha corta entre ellas:

1. Requerimientos + diseño
2. Discovery
   - Debajo: icono de persona + "aprueba una persona"
3. Spec OpenSpec
   - Debajo: icono de persona + "aprueba una persona"
4. TDD · Developer
5. QA + Reviewer
6. PR + CI
   - Debajo: icono de persona + "aprueba una persona"

Las etapas 1, 2 y 3 usan un estilo de nodo (spec/diseño), las etapas 4 y 5 otro (construcción), y la etapa 6 otro (entrega). Icono de persona: simple, lineal y del mismo trazo que el resto de la lámina (por ejemplo Lucide "user-round"), de tamaño pequeño, color azul de acento.

## Gates deterministas en cada PR
(Tarjeta grande a la izquierda, debajo del flujo, ocupa aproximadamente la mitad del ancho)
- Etiquetas (chips) en dos filas:
  - hitl
  - openspec
  - tasks
  - tests
  - trazabilidad
  - arquitectura DDD
  - naming (inglés)
  - evidencia
- Texto: Las decisiones críticas no dependen del LLM: scripts y CI las verifican. 6 agentes · skills · GitHub MCP · OpenSpec.

## 110
(Tarjeta de cifra, a la derecha de la tarjeta de gates)
- tests en la suite tras S0, W1 y W2, en verde

## 100/100
(Tarjeta de cifra, a la derecha de la anterior; la cifra debe caber en una sola línea)
- gates por historia y CI verde

## 15+
(Tarjeta de cifra, a la derecha de la anterior)
- mejoras del harness nacidas de fallas reales

## Pie
- Billetera Digital (igual que las demás láminas, sin número de página)
