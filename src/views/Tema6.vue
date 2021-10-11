<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Verificación de servicio y rendición de cuentas

    .contenedor.bg8
      .row.align-items-center
        .col-lg-6
          p Dentro del sistema de administración y gestión, en el módulo implementado para el registro y administración de los PQRSDF en atención y servicio al ciudadano, es imperativo que cada periodo mensual, bimestral, trimestral, semestral y anual, como la entidad lo necesite, se lleven las estadísticas de atención frente al número de solicitudes PQRSDF recibidas, tramitadas, en curso, cuántas de cada tipo: P=?, Q=?, R=?, S=?, D=?,F=?, las cuales serán acumulativas y servirán para la elaboración del informe de gestión de la institución.
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span Ejemplo de resumen de los niveles de atención al ciudadano por PQRSDF para un periodo
          img(src='@/assets/curso/t6/f1.svg' alt='')

    h3.cp Rendición de cuentas
    p.mb-5 La administración de la entidad pública deberá desarrollar un reporte de sus gestiones desde cada uno de los frentes funcionales o estratégicos que haya definido en el Modelo de gestión MIPG, donde deberá expresar los principales indicadores de resultado de su gestión:

    .row.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/t6/f2.png' alt='imagen relacionada')
      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-circle
            | Ejecución presupuestal.
          li 
            i.fas.fa-circle
            | Crecimiento y expansión de la presencia operativa y de servicio. 
          li 
            i.fas.fa-circle
            | Número de servicios o productos prestados. 
          li 
            i.fas.fa-circle
            | Proyectos iniciados.
          li 
            i.fas.fa-circle
            | Proyectos concluidos.
          li 
            i.fas.fa-circle
            | Proyección.
          li 
            i.fas.fa-circle
            | Temas relacionados con la atención y servicio al ciudadano en general. 
        .cajon-b.color-acento-contenido.p-4
          p.mb-0 Con la información recopilada, analizada y estructurada en el informe de gestión debe ser validada por las diferentes instancias incluido control interno por lo que la entidad deberá programar su divulgación en la página web institucional y en los canales que considere pertinentes para su conocimiento y seguimiento, mínimo una vez por año. 
        .cajon-c.color-primario.p-4
          p.mb-0 Dado lo anterior, deberá programar una jornada rendición de cuentas propiamente dicha, que es la obligación por parte de las entidades públicas y sus servidores representantes de la dirección, con el fin de informar, explicar y sintetizar los avances y resultados por las gestiones adelantadas en un periodo dada la implicación de recursos, como el avance en restitución y garantía de derechos de los ciudadanos. La actividad de rendición de cuentas se adelanta regularmente en espacios físicos que facilitan el diálogo público con complemento de medios virtuales de transmisión, cuando los ciudadanos o comunidad procede de otras regiones; lo que le tiene como ventaja para la institución ser percibida como responsable, creíble por llevar evidencias, transparente, responsable y generadora de buen concepto de confianza.

    p.mb-5 Es por ello, que como responsables del servicio y calidad al ciudadano se debe tener en cuenta una preparación para la jornada de rendición de cuentas, como se muestra a continuación: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Las jornadas de rendición de cuentas no necesariamente se dan en una sola ocasión o punto, son un conjunto de actuaciones que facilitan el diálogo interactivo con la ciudadanía o comunidad interesada en los aspectos de gestión de la entidad.

</template>

<script>
export default {
  name: 'Tema6',
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
