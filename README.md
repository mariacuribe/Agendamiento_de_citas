# Agendamiento-Citas

Crea una aplicacion de agendamiento de citas. la aplicacion debe contener 2 campos en los que pueda introducir los siguientes datos:
1. Nombre
2. Fecha y hora de la cita.

La aplicacion debe de mostrar cada cita creada listada en tarjetas.
unicamente debe mostrarse cada tarjeta a medida que se van creando las citas. no tiene q haber funcionalidad de editar o borrar.

## Comentarios del instructor - Kevin Pérez
El HTML está bien hecho. Cada etiqueta tiene sus atributos bien declarados. Implementaron un form, cosa que me parece excelente. Bien hecho.

En cuanto al CSS, veo muy buenas prácticas ahí. Implementaron css, estilos onHover y varios tipos de selectores, aparte de tener un excelente diseño en la aplicación.

El JS está muy bien hecho y es muy conciso. Las constantes están bien declaradas y nombradas y los elementos se están creando con `createElement`, cosa que es una buena práctica.

Como posibles puntos de mejora, veo los siguientes elementos:
1. Evitar el uso de `innerHTML`. Esto podría permitir ataques de inyección de código
2. Aunque no fue un requerimiento en específico, nótese que el sistema permite la creación de citas sin nada de contenido. Un control de campos solucionaría el problema

Los puntos de mejora no afectan en nada el funcionamiento de la aplicación ni el hecho de que cumplieron satisfactoriamente los requisitos solicitados en el reto. Felicitaciones. ¡Excelente trabajo!