<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Efectividad del servicio y percepción del usuario

    p.mb-5 La efectividad en las entidades es la correlación entre la eficiencia y la eficacia, siendo la primera el resultado del aprovechamiento de los recursos dispuestos para la ejecución de los procesos de la operación de la entidad, el cumplimiento de su propósito misional a través de los procesos y procedimientos definidos para tal propósito. La eficacia, por su parte, es la correlación entre la calidad, satisfacción de los usuarios, el impacto generado en ellos, a través de los productos o servicios que presta la entidad, lo que contribuye a la seguridad y confianza institucional.

    .col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span Efectividad en las entidades públicas en la prestación de servicio y atención al ciudadano
      img(src='@/assets/curso/t7/f1.svg' alt='')
      figcaption Fuente: <a href="https://secretariageneral.gov.co/sites/default/files/mipg_dimension_2_direccionamiento_estrategico_y_planeacion.pdf" target="_blank">Departamento administrativo de la Función pública. Modelo integrado de Planeación y gestión MIPG. Taller- 2018, pág.12.</a>

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t7/f2.png' alt='imagen relacionada')
      .col-lg-7
        .cajon-b.color-acento-contenido.p-4
          p La correlación de la eficiencia y la eficacia dan como resultado la efectividad de la entidad, y por tanto su efecto en la imagen institucional. La organización no será efectiva, si tiene eficacia en los productos y servicios prestados ante peticiones particulares o de unos pocos, pero para ello derrocha recursos o genera reprocesos. Mucho menos si es eficiente, pero sus clientes están insatisfechos. En cualquiera de los dos casos la percepción de la entidad no será positiva, la sociedad hace una interpretación holística e integral, así como los organismos de control, lo que repercutirá en medidas correctivas inmediatas, de intervención administrativa operativa, o de acompañamiento y verificación permanente, pues en cualquiera de los dos casos hay detrimento y configuración de peculado técnico o falla disciplinaria. Por lo anterior, las entidades públicas deben velar por conseguir resultados óptimos en su gestión, en el impacto favorable de sus productos o servicios, y en la atención a los usuarios o ciudadanos en temas de PQRSDF, pues son parte sustantiva de su existencia como entidad.

    .contenedor.bg8.mb-5
      .row.align-items-center.mb-5
        .col-lg-7
          p El Sistema Integrado de Planeación y Gestión (MIPG), en cabeza de sus funcionarios responsables, en un trabajo interdisciplinario de procesos, áreas de servicio o funcionales, deberán estructurar los indicadores que reflejen los estados de Eficacia y eficiencia, para después poder determinar el índice de efectividad. Esta batería de indicadores en la gestión de la entidad, deberán programarse en el sistema de gestión con que opere la entidad y generar los reportes de estado, en los diferentes momento de corte; mensualmente, bimensual, trimestral, semestral, anual o acumulado; esto permitirá identificar periodos de estacionalidad operativa, esto es por ejemplo: en épocas de vacaciones la entidad merma su capacidad de atención, entonces puede impactar sus procesos, por tanto afecta su eficiencia, pero a su vez, los ciudadanos cuentan con los mismos comportamientos, por tanto la eficacia se ve afectada, por menores solicitudes, lo que hace el esquema más equilibrado, pero pueden existir otras relaciones desequilibrantes que afectan los resultados.
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            span Relaciones de efectividad
          img(src='@/assets/curso/t7/f3.svg' alt='')

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t7/f4.svg' alt='imagen relacionada')
      .col-lg-8
        .cajon-b.color-acento-contenido.p-4.mb-0 
          p.mb-0 Esta relación se puede establecer de manera desagregada para cada uno de los procesos estratégicos de la entidad, pero siempre se debe establecer de manera global como entidad, que presta un servicio dentro de un objeto social bien definido, expresado en su misión y el cual se manifiesta en su proceso de atención y servicio al ciudadano, los cuales fueron reconocidos y ajustados, tal como se mencionó atrás, generando impactos positivos o satisfacción que es la medida del cumplimiento real de su misión, garantizando así el derecho que le ha sido encomendado como entidad pública.
        .cajon-b.color-acento-contenido.p-4
          p.mb-0 Las entidades al establecer modelos de planeación estratégica definen objetivos o niveles de alcance esperados en los diferentes periodos de gestión, que en sumatoria obedecen a los objetivos de los planes y proyectos al momento de ser aprobados, y que se desagregaron en el tiempo de ejecución. Por tanto, los resultados de un periodo de gestión se deben contrastar frente a los valores esperados y de compromiso social que fueron aprobados al momento de aprobar el plan, proyecto. Como los planes no son estáticos, sino dinámicos, en la medida en que las necesidades sociales crecen, es frente a los ajustes aprobados como último dato que se realiza dicho contraste, pues de seguro los recursos y las capacidades operativas de la entidad cambiaron al aprobar dichos ajustes.

    .col-lg-7.mx-auto
      .titulo-sexto.color-acento-contenido
        span Determinación de resultados alcanzados en la gestión
      img(src='@/assets/curso/t7/f5.svg' alt='').mb-5
      figcaption Fuente: <a href="https://secretariageneral.gov.co/sites/default/files/mipg_dimension_2_direccionamiento_estrategico_y_planeacion.pdf" target="_blank">Departamento administrativo de la Función pública. Modelo integrado de Planeación y gestión MIPG. Taller, 2018. (página 12- Imagen modificada: producción propia)</a>

</template>

<script>
export default {
  name: 'Tema7',
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
