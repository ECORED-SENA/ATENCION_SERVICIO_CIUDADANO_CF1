<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Orientación y atención del servicio a prestar

    .row.align-items-center.mb-5
      .col-lg-7
        p Las entidades públicas están en la obligación por ley de atender las diversas solicitudes o peticiones que los ciudadanos realizan, que pueden ser o no propiamente frente al producto o servicio básico de la institución, si no también pueden obedecer a aspectos de diferente índole, y a los que se les denomina regularmente PQRSDF (Peticiones, Quejas, Reclamos, Solicitudes, Denuncias y Felicitaciones). Es un derecho que nace desde la Constitución Política de 1991 en la cual se cita que “toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución” y “tienen derecho a acceder a los documentos públicos salvo los casos que establezca la ley”. Así mismo, existen otros instrumentos de normativos de ley y de decretos, que complementan este derecho social que impone la constitución, los cuales se pueden observar en los criterios normativos para PQRSDF, donde se detallan los aportes de cada uno de estos instrumentos legales como posibilidades de los ciudadanos: 
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Criterios normativos para PQRSD
      .col-lg-5
        figure
          img(src='@/assets/curso/t5/f1.png' alt='imagen relacionada')
    
    p.mb-5 Adicional, sirviendo de parámetros para las entidades públicas para ajustar sus modelos de atención y servicio al ciudadano y generando sistemas que atiendan los PQRSDF a través de los cuales se identifica la tipología a continuación:
    .titulo-sexto.color-acento-contenido
      span Tabla Tipología de solicitudes PQRSDF del sistema de atención al ciudadano
    .tabla-b.color-acento-contenido.mb-5
      table
        tr.tabla-b__header.texto-blanco
          th
            h5.mb-0 Tipo
          th
            h5.mb-0 Descripci&oacute;n
          th
            h5.mb-0 Definici&oacute;n
          th
            h5.mb-0 Tiempo estimado para dar respuesta desde la entidad
        tr
          td(rowspan='11') P
          td(rowspan='11') Petici&oacute;n
          td Derecho que tiene toda persona para solicitar y presentar, respetuosamente a las entidades p&uacute;blicas de autoridad o prestaci&oacute;n de servicios&nbsp; bien sea por motivos de inter&eacute;s general o particular, informaci&oacute;n, documentos, conceptos, entre otros. Las cuales se pueden clasificar as&iacute;:
          td 
        tr
          td <strong>De inter&eacute;s general</strong>: formuladas por persona natural &nbsp; jur&iacute;dica, cuyo objetivo es obtener un bien o servicio acorde a las funciones de la entidad &nbsp; de beneficio a la comunidad en general.
          td 15 d&iacute;as
        tr
          td <strong>De inter&eacute;s particular</strong>: formuladas por persona natural &nbsp; jur&iacute;dica, cuyo objetivo parte de un inter&eacute;s propio de quien la realiza la solicitud
          td 15 d&iacute;as
        tr
          td <strong>De documentos</strong>: buscan solicitar a la entidad p&uacute;blica copia de documentos generados y/o que se
            p encuentren en su poder o resguardo.
          td 10 d&iacute;as
        tr
          td <strong>De informaci&oacute;n</strong>: buscan el suministro de informaci&oacute;n sobre documentos, tr&aacute;mites, servicios o de asuntos propios o que ata&ntilde;en a la entidad.
          td 10 d&iacute;as
        tr
          td <strong>De consulta</strong>: para que la entidad p&uacute;blica manifieste y emita concepto o interpretaci&oacute;n sobre aspectos
            p relacionados con sus funciones y responsabilidad social.
          td 30 d&iacute;as
        tr
          td <strong>Entre autoridades</strong>: son las provenientes de otras entidades del estado
          td 10 d&iacute;as
        tr
          td <strong>De los entes de control</strong>: provenientes de las autoridades de &oacute;rganos de control.
          td 5 d&iacute;as
        tr
          td <strong>Oscura:</strong> son aquellas donde no se comprende el objeto de la solicitud, por tanto, se debe devolver al interesado para que la corrija o aclare en diez (10) d&iacute;as siguientes a su radicado, de lo contrario se toma como desistimiento.
          td 10 d&iacute;as
        tr
          td <strong>An&aacute;logas:</strong> consistente cuando la entidad identifica m&aacute;s de diez (10) solicitudes que &nbsp; peticiones semejantes en su objeto. La entidad podr&aacute; dar &uacute;nica respuesta global&nbsp; &nbsp; diario oficial o de amplia circulaci&oacute;n, en p&aacute;gina &nbsp; oficial y entregando copia a cada uno que solicit&nbsp;.
          td 10 d&iacute;as
        tr
          td <strong>Preferentes y prioritarias</strong>: en el primer caso cuando son interpuestas por &nbsp; o adultos mayores, y prioritarias cuando obedecen a situaciones que comprometen la vida y/o representan situaciones de peligro o riesgo.
          td 10 d&iacute;as
        tr
          td Q
          td Quejas
          td Es una expresi&oacute;n de protesta e inconformidad que &nbsp; las personas, por conductas que considera&nbsp; inapropiadas por parte de servidores p&uacute;blicos de la entidad en el desarrollo de sus funciones y deberes operativos o trabajo.
          td 15 d&iacute;as
        tr
          td R
          td Reclamos
          td Voz de expresi&oacute;n de toda persona con fin de exigir o demandar calidad, servicio o soluci&oacute;n real, frente a una petici&oacute;n o mal producto o servicio de la entidad.
          td 15 d&iacute;as
        tr
          td S
          td Sugerencias
          td Es una iniciativa para el mejoramiento o propuesta que formula un usuario o instituci&oacute;n en aras de los procedimientos, productos o servicios de la Entidad, a los cuales hay que responder como recibido, pero no hay obligatoriedad en aplicarlos.
          td 15 d&iacute;as
        tr
          td D
          td Denuncias
          td Es poner en conocimiento una conducta inadecuada e irregular en contra de normas de la entidad o ley, para que se realicen las investigaciones y se imponga la medida disciplinaria y sancionatoria correspondiente. En estos casos, es indispensable que se haga la relator&iacute;a de las circunstancias de lugar, tiempo y modo.
          td 15 d&iacute;as
        tr
          td F
          td Felicitaciones
          td Son las voces de manifestaci&oacute;n de satisfacci&oacute;n recibidas por los servicios recibidos o que le brinda la instituci&oacute;n &nbsp; a la comunidad en general, a las cuales se debe&nbsp; responder de igual manera.
          td

    .row.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/t5/f2.svg' alt='imagen relacionada')
      .col-lg-9
        .cajon-b.color-acento-contenido.cajon-c.color-primario.p-4
          p.mb-0 La entidad tendrá la necesidad de implementar y centralizar un módulo o sistema de gestión de los PQRSDF integrado al de gestión general, que facilite el recibo (tanto verbales como físicas), y reparto de las mismas a las dependencias responsables de dar las respuestas pertinentes (lo que se denomina escalamiento), que esté interconectado con la base de datos de expedientes por usuario, donde los diferentes canales y puntos de contacto albergan la información, de tal manera que se tenga un proceso holístico y de trazabilidad de las PQRSDF, generando la administración de los tiempos de respuesta y el aval de quien faculta y autoriza el contenido de las respuestas, quien por lo regular está en cabeza del representante legal de la entidad y su equipo designado funcionalmente.

</template>

<script>
export default {
  name: 'Tema5',
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
