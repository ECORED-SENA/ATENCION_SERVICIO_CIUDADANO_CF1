<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Seguimiento y verificación de respuesta

    p.mb-5 El seguimiento y verificación de respuesta es parte del proceso que deben realizar las organizaciones frente a los requerimientos recibidos por parte de los usuarios o ciudadanos, para tal caso se debe recibir, tramitar y resolver las peticiones que la ciudadanía formule y se relacionan con el cumplimiento de la misión de la entidad con oportunidad, calidad y transparencia.
    
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
      .carousel-inner
        .carousel-item.active
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Gestionar</b> en su propio sistema de gestión documental, las peticiones desde su recibo hasta su respuesta, incluyendo los controles y la generación de reportes respectivos 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f1.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Recibir, tipificar y asignar</b> la solicitud en el Sistema de Gestión Documental de la entidad, evaluar la petición y asignar a un funcionario de acuerdo con su competencia. Tener en cuenta una metodología diferenciada para las peticiones escritas, verbales o anónimas. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f2.svg' alt='icono relacionado')
        .carousel-item
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p Garantizar que los datos de toda la ciudadanía queden en el sistema después de haber sido inscritos por primera y única vez, cuando no obedezcan a peticiones anónimas, de tal manera que todas las interacciones subsecuentes, no generen reprocesos para la ciudadanía en el suministro de su información personal. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f3.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Verificar</b> la competencia de la dependencia sobre la petición, queja, reclamo, sugerencia o denuncia, de acuerdo con la temática. Si no es competencia de la entidad, se deberá trasladar la petición a la Entidad competente dentro de los cinco (5) días siguientes al recibo de la comunicación y enviar copia al interesado. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f4.svg' alt='icono relacionado')
        .carousel-item
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Recopilar y analizar</b> información relacionada con la solicitud, preparar y proyectar respuesta teniendo en cuenta el tipo de petición y los tiempos de vencimiento para dar respuesta a la petición en términos de oportunidad, eficiencia, eficacia y calidad. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f5.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Comprobar</b> las peticiones a cargo de la dependencia y emitir respuesta acorde con los tiempos establecidos. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f6.svg' alt='icono relacionado')
        .carousel-item
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Realizar</b> seguimiento a las respuestas a cargo de cada dependencia de la entidad. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f7.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p Revisar en el sistema de gestión documental todas las peticiones radicadas y verificar que se haya emitido respuesta. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f8.svg' alt='icono relacionado')
        .carousel-item
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Examinar</b> y efectuar seguimiento de las solicitudes que estén próximas al vencimiento de los términos para emisión de respuesta, según el tipo de solicitud. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f9.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Preparar</b> y presentar informes de seguimiento de todas las peticiones a cargo del área responsable de liderar la gestión de servicio a la ciudadanía para su posterior publicación en página <em>web</em>. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f10.svg' alt='icono relacionado')
        .carousel-item
          .row.align-items-center.justify-content-center
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Proyectar</b> informes periódicos de las peticiones para la revisión de la oficina de Secretaría General, la dirección institucional o los entes externos de control, así como para informes de rendición de cuentas. 
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f11.svg' alt='icono relacionado')
            .col-lg-5.col-md-8
              .row.align-items-center.justify-content-center
                .col
                  p <b>Presentar</b> en el Comité de Desarrollo Administrativo, el informe periódico de peticiones.
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t3/f12.svg' alt='icono relacionado')
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    .contenedor.bg6
      .row.justify-content-center.align-items-center.tarjeta.boxShadow.mb-5
        .col-lg-6
          p.mb-0 En este caso se puede hacer seguimiento de carácter cualitativo o cuantitativo para determinar capacidades y poder establecer niveles de crecimiento y puntos de atención, ampliación de canales, o simplemente diseñar nuevos protocolos y procedimientos de atención, etc.
        .col-lg-5
          figure
            img(src='@/assets/curso/t3/f13.png' alt='Imagen relacionada')

      .row.align-items-center.mb-5
        .col-lg-7
          h3.cp Evaluar y monitorear los resultados de prestación del servicio 
          p Es importante considerar indicadores que vayan más allá de la simple gestión operativa del servicio, como tiempo de resolución de la solicitud o número de solicitudes atendidas, para considerar indicadores que midan el contexto e impacto de la prestación del servicio, medición de casos especiales.
          p La medición de la Política de Servicio al Ciudadano se materializa mediante la implementación de la dimensión de Evaluación de Resultados de MIPG, en la medida en que dicha dimensión busca conocer permanentemente los avances en la consecución de los resultados previstos en la planeación y definir los efectos de la gestión institucional en la garantía de los derechos, satisfacción de necesidades y resolución de los problemas de los grupos de interés o valor para la institución porque son quienes expresan la efectividad de la entidad.
          p Se propone establecer un esquema de seguimiento en dos partes: 
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f14.png' alt='Imagen relacionada')

    .contenedor.bg7.ofVisible
      .col-lg-7.mx-auto
        .row.bg3-1.traslape.h160px.align-items-center
          .col-md-1
            figure
              img(src='@/assets/curso/t3/e1.svg' alt='1' style='width:74px')
          .col
            p.mb-0 La primera, que permita conocer los avances respecto de la gestión institucional para el servicio al ciudadano y su implementación política desde el punto de vista de la entidad:

      .row.align-items-center
        .col-lg-8
          h3 Evaluación y medición de la gestión institucional e implementación de la política
          .cajon-b.color-acento-contenido.p-4.mb-0
            p.mb-0 En primer lugar, es necesario establecer indicadores de producto que permitan hacer seguimiento a cada una de las acciones definidas anualmente en la planeación institucional, por ejemplo: protocolos implementados, canales con ajustes razonables implementados de acuerdo con la NTC 6047. Este es el esquema más sencillo de seguimiento y evaluación y a la vez, el más integral, teniendo en cuenta que la planeación debe contemplar acciones que respondan a la caracterización de la población objetiva, al diagnóstico de la implementación de la política, a los resultados de los ejercicios de co-creación con ciudadanos y a las mediciones efectuadas. 
          .cajon-c.color-acento-contenido.p-4
            p.mb-0 En segunda medida, debe efectuarse seguimiento y medición a la efectividad de los procesos misionales relacionados directamente con la entrega de bienes y servicios a los grupos de valor y al cumplimiento del objeto misional, por ejemplo: subsidios asignados, créditos otorgados, víctimas indemnizadas, estudiantes matriculados, predios restituidos, etc.; así como, mediciones de desempeño que permitan evidenciar la oportunidad en su entrega y la eficiencia en el proceso de los aspectos a mejorar, el reforzamiento de equipos de trabajo que atiendan las cuestiones de consulta.
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f15.png' alt='Imagen relacionada')

      .row.align-items-center.mb-4
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f16.svg' alt='Imagen relacionada')
        .col-lg-8
          p Un tercer elemento en la medición comprende el análisis de la respuesta de la entidad a las peticiones que efectúan los ciudadanos, revisando la oportunidad o cumplimiento de términos legales establecidos para responder, la claridad de la información suministrada y la efectividad en la respuesta que se entrega a los ciudadanos. 
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Por último, se debe medir la gestión de la entidad en la atención en los diferentes canales: tiempos de espera para ser atendido, tiempo de atención, cantidad de personas atendidas, cumplimiento de requisitos de accesibilidad, disponibilidad de los canales, etc. 
          p Esta medición dará insumos para la identificación de necesidades de recursos para la adecuación de canales de atención, optimización de procesos para reducción de tiempos y necesidades de reorganización o fortalecimiento de equipos de trabajo para atender la demanda creciente de solicitudes.

      p.mb-5 La siguiente figura muestra un ejemplo de los resultados de indicadores de las gestiones desarrolladas de atención al usuario.

      .col-lg-11.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span Medición de la gestión institucional
        figure
          img(src='@/assets/curso/t3/f17.svg' alt='Medición de la gestión institucional').mb-4
          figcaption.mb-5 Nota: <a href="https://rionegro.gov.co/wp-content/uploads/2021/02/INFORME-DE-EVALUACION-Y-SEGUIMIENTO-PQRS-SEMESTRE.pdf" target="_blank">Alcaldía de Rionegro 2020, página 4</a>

    .contenedor.bg8.ofVisible
      .col-lg-7.mx-auto
        .row.bg3-1.traslape.h160px.align-items-center
          .col-md-1
            figure
              img(src='@/assets/curso/t3/e2.svg' alt='1')
          .col
            p.mb-0 La segunda, orientada a identificar la percepción de los ciudadanos por medio de mediciones sobre su experiencia de servicio, la efectividad de los mismos y la capacidad de la entrega de resultados al ciudadano:

      .row.align-items-center.mb-5
        .col-lg-8
          h4 Medición de la experiencia de servicio y de la percepción de los ciudadanos
          .cajon-b.color-acento-contenido.p-4
            p.mb-0 Desde los Lineamientos De La Política Pública De Servicio Al Ciudadano, Departamento Nacional De Planeación, Departamento Administrativo de La Función Pública 2020, se dice que una de las principales fuentes de información para evaluar la percepción de los ciudadanos o usuarios e identificar oportunidades de mejora, está en el análisis de la información sobre las peticiones recibidas, en quejas, reclamos, sugerencias y denuncias que presentan los ciudadanos. Este análisis debe permitir identificar temáticas recurrentes sobre las cuales los ciudadanos solicitan información o exigen cuentas, lo cual es un insumo para la divulgación proactiva de la información o para el diseño de ejercicios de rendición de cuentas y focalizar la promoción de los espacios y mecanismos para la participación ciudadana en la gestión pública. Así mismo, permite identificar trámites o gestiones con mayor demanda y a partir de allí priorizar su simplificación, divulgación de información o asignación de recursos físicos, tecnológicos o administrativos para su gestión oportuna. Por su parte, de la información que se recibe sobre sugerencias se pueden identificar acciones que permitan la mejora del servicio o la gestión institucional, y de la información sobre denuncias se pueden implementar correctivos o controles que mitiguen su ocurrencia y mejoren la confianza de los ciudadanos en la Administración. 
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f18.png' alt='imagen relacionada')
            
      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src='@/assets/curso/t3/f19.png' alt='imagen relacionada')
        .col-lg-7
          p Otro insumo indispensable de medición de percepción ciudadana son las encuestas efectuadas a los ciudadanos que han interactuado con la entidad a través de cualquier canal, en las cuales puede evaluarse integralmente el servicio prestado, la calidad de la atención, la cualificación y disposición del servidor público, la calidad, oportunidad y pertinencia de la información recibida, el tiempo real de espera y obtención, el cumplimiento de protocolos de atención, la experiencia del ciudadano y el nivel de satisfacción, entre otros.

      p.mb-5 La siguiente figura muestra un ejemplo de los resultados de indicadores por tipos de experiencia de servicio que los usuarios interpusieron.
      .col-lg-8.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          span Medición de experiencias de servicio
        figure
          img(src='@/assets/curso/t3/f20.svg' alt='Medición de experiencias de servicio')
          figcaption Nota: <a href="https://rionegro.gov.co/wp-content/uploads/2021/02/INFORME-DE-EVALUACION-Y-SEGUIMIENTO-PQRS-SEMESTRE.pdf" target="_blank">Alcaldía de Rionegro 2020- Rendición de cuentas, página 5.</a>

      p.mb-5 Los niveles de atención y servicio a los ciudadanos deben dejar evidencias escritas de respuesta o solución a sus peticiones, las cuales deben allegarse por alguno de los canales establecidos, preferiblemente personal escrito. En caso de sugerencias, se debe notificar el recibido agradeciendo por la percepción para el mejoramiento, así mismo se debe llevar el récord de sugerencias planteadas por los ciudadanos, y definir los aspectos a mejorar dentro del plan de mejoramiento. Este proceder institucional permite hacer un cierre formal de la petición.
      .row.align-items-center
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f21.png' alt='imagen relacionada')
        .col-lg-8
          .cajon.color-acento-contenido.p-4
            p.mb-0 La entidad registrará en el banco general de expedientes el acto resolutivo de cada una de las peticiones, lo que permitirá llevar indicadores de respuesta, duración, períodos de mayores solicitudes, tipos de solicitudes y aspectos recurrentes de consulta, lo que permite dar lineamientos al plan de mejoramiento en protocolo de atención al ciudadano, y calidad del mismo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
