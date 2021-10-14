<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Proceso de servicio

    .row.align-items-center.mb-5
      .col-lg-7
        p Conforme al Departamento Nacional de Planeación (diciembre de 2020) el Modelo Integrado de Planeación y Gestión (MIPG), reúne entonces todas las políticas de gestión y desempeño institucional cuya implementación permite que las entidades alcancen sus objetivos misionales y generen valor público; entre ellas la Política de Servicio al Ciudadano, que se desarrolla en la dimensión de gestión con valores para resultados de política transversal. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 El Modelo Integrado de Planeación y Gestión (MIPG) es un marco de referencia para dirigir, planear, ejecutar, hacer seguimiento, evaluar y controlar la gestión de las entidades y organismos públicos, con el fin de generar resultados que atiendan los planes de desarrollo y resuelvan las necesidades y problemas de los ciudadanos, con integridad y calidad en el servicio (Decreto 1499 de 2017).
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f1.png' alt='MIPG')

    .col-lg-11.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span Definición del Modelo de integrado de planeación y gestión
      img(src='@/assets/curso/t2/f2.svg' alt='Definición MIPG').mb-4
      figcaption Fuente: <a href="https://www.funcionpublica.gov.co/documents/28587410/34112007/Manual+Operativo+MIPG.pdf/ce5461b4-97b7-be3b-b243-781bbd1575f3" target="_blank">Departamento Administrativo de la Función Pública, 2019 Manual Operativo del Modelo Integrado de Planeación y Gestión, página 8</a>. 

    .row.align-items-center.mb-5
      .col-lg-7
        .cajon-b.color-acento-contenido.p-4
          p.mb-0 El Comité Institucional de Desarrollo Administrativo (25 de abril de 2018) presenta el Modelo Integrado de Planeación y Gestión en donde se aplica a las entidades de la Rama Ejecutiva del orden nacional, que lo actualizarán y a las entidades del orden territorial que lo implementarán por primera vez y para las cuales se determinarán criterios diferenciales. La política de Control Interno de MIPG se aplicará además a las entidades y organismos estatales sujetos a régimen especial, las Ramas Legislativa y Judicial, la Organización Electoral, los organismos de control y los demás organismos que lo requieran y deseen implementar por cumplir funciones públicas.
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f3.png' alt='Imagen relacionada')

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f4.png' alt='Imagen relacionada')
      .col-lg-7
        .cajon-b.color-primario.p-4
          p.mb-0 El MIPG en pro de la debida función pública y de atención a los ciudadanos opera a través de la puesta en marcha de siete (7) dimensiones, entre las cuales se encuentra el Talento Humano como corazón del Modelo, pues es de ellos de quien depende el buen servicio; se basa así mismo en el ciclo de gestión de la calidad PHVA (Planear - Hacer - Verificar - Actuar), e incluye aspectos básicos para una buena y moderna gestión pública en un marco democrático y social. El Control Interno es un aspecto relevante que válida y corrige la buena praxis y el mecanismo del cumplimiento de los objetivos institucionales y del impacto en los ciudadanos.
    p.mb-5 Las dimensiones expuestas en el siguiente esquema se entienden como el conjunto de políticas, prácticas y herramientas, donde puestas en marcha se articulan generando sinergias en pro de suplir las necesidades, problemas o requerimientos de los ciudadanos:

    .col-lg-11.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span Dimensiones del modelo integrado
      img(src='@/assets/curso/t2/f5.svg' alt='Dimensiones del modelo integrado').mb-4
      figcaption.mb-4 Nota: Departamento Administrativo de la Función Pública, 2017 (Imagen tomada de Manual Operativo del Modelo Integrado de Planeación y Gestión, página 16)
      a.anexo.mb-4(:href="obtenerLink('/downloads/Dimensiones_modelo_integrado.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p <b>Anexo.</b> Dimensiones_modelo_integrado

    .row.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Cada dimensión se desarrolla a través de una o varias políticas de Gestión y Desempeño Institucional, fueron diseñadas y señaladas, en el Decreto 1499 de 2017 entre las que se encuentran: Planeación Institucional, Gestión presupuestal y eficiencia del gasto público, Talento humano, Integridad, Transparencia, Acceso a la información pública y lucha contra la corrupción, Fortalecimiento organizacional y simplificación de procesos, Servicio al ciudadano (propiamente dicha), Participación ciudadana en la gestión pública, Racionalización de trámites, Gestión documental, Gobierno Digital o Gobierno en Línea, Seguridad Digital, Defensa jurídica, Gestión del conocimiento y la innovación, Control interno, Seguimiento y evaluación del desempeño institucional. 
        p A continuación, se puede entender como los motores de MIPG son los principios de integridad y legalidad:
        .titulo-sexto.color-acento-contenido
          span Motores de MIPG
        img(src='@/assets/curso/t2/t1.svg' alt='Motores de MIPG').mb-4
        figcaption Fuente: Departamento Administrativo de la Función Pública, 2017- Elaboración propia
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f6.png' alt='imagen relacionada')

    Separador
    #t_2_1.titulo-segundo
      h2 2.1 El proceso de atención al ciudadano

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f7.png' alt='imagen relacionada')
      .col-lg-8
        p Las entidades públicas por su naturaleza, son entidades que cumplen su propósito misional en favor de facilitar la administración y gestión del Estado, facilitando el acceso a los productos o servicios que suministran y que deben poner al servicio de la sociedad, ya sean estas de naturaleza nacional, departamental o municipal, garantizando el disfrute de los derechos; así mismo, respondiendo a los diversos requerimientos o peticiones que las personas naturales o jurídicas puedan interponer, siendo un deber, por ley, darle atención y responder en conformidad a su alcance y responsabilidad. Es así como dentro del Modelo Integrado de Planeación y Gestión (MIPG), <b><span class="cp">las entidades públicas deben establecer un proceso para la atención y servicio al ciudadano efectivo, que permita cumplir su propósito misional y atender oportunamente las diferentes peticiones de los ciudadanos en un escenario de equidad y pluralidad, en conformidad a las particularidades sociales.</span></b>
        p El proceso de atención al ciudadano es el conjunto de gestiones que representan el deber ser de las entidades públicas en sí, el resto de gestiones interinstitucionales son la ruta para cumplir el cometido, por tanto una entidad pública muy bien administrada y gestionada en su interior, no tiene impacto verdadero  si no cuenta con una atención al ciudadano que se beneficie y esté confiada y segura que la entidad responde oportuna y satisfactoriamente sus peticiones, o le garantice sus derechos; razón por la cual hay que entender cuál es el tipo de servicio que se demanda por parte de los ciudadanos, como debe ser el ciclo de atención, los canales, entre otros aspectos que se relacionan en adelante.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Tipo de servicio")
        .row.align-items-center
          .col-lg-8
            h3 Tipo de servicio
            p La atención y servicios al ciudadano en las entidades públicas se produce básicamente por cuatro razones o tipos de solicitud de servicio básicamente:
            ul.lista-ul.ms-4
              li 
                i.fas.fa-circle.cac
                | Para ser atendidos en requerimientos de información institucional o de servicios. 
              li 
                i.fas.fa-circle.cac
                | Por acceso a los productos o servicios que ofertan o prestan las entidades desde su actividad misional
              li 
                i.fas.fa-circle.cac
                | Para proponer o sugerir mejoras
              li 
                i.fas.fa-circle.cac
                | Para interponer quejas o reclamaciones relacionadas con la atención, calidad de la información o cualquier inconformidad que les impulse o les genere insatisfacción o indignación.
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f8.png' alt='imagen relacionada')
      .py-3.py-md-4(titulo="Ciclo de atención al usuario")
        .row.mb-4
          .col-lg-8
            h3 Ciclo de atención al usuario
            p El proceso de atención al ciudadano o cliente se inicia desde el momento en que este accede a la entidad por un punto de contacto, bien sea de manera presencial, por medio telefónico, de correo electrónico, o por buzón o radicando comunicación escrita; y termina hasta el momento en que finaliza el trámite o servicio. Por ende, el proceso en sí se encuentra enmarcado dentro de la duración de la actividad del ciudadano-cliente.
            p A continuación, se presenta el esquema general que permite entender las tres etapas del ciclo de atención al ciudadano en las entidades públicas:
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f9.png' alt='imagen relacionada')
        .row.align-items-end.justify-content-between.mb-4.mt_6rem
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f10.svg' alt='imagen relacionada')
          .col-lg-7
            .cajon.color-secundario.p-4
              p.mb-0 Las actividades de <b><span class="cp">preparación</span></b> suelen ser de naturaleza informativa, donde la entidad comunica los requisitos, términos y lineamientos del servicio ofrecido, lo cual puede darse por diferentes canales o medios, pero que le permiten al ciudadano interesado contar la información preliminar y el conocimiento protocolario suficiente para que la solicitud de atención no se vea limitada o afectada por incumplimientos de ingreso o registro.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Las actividades realizadas durante la <b><span class="cac">fase de atención</span></b> corresponden regularmente a la entidad y consisten en la prestación del servicio solicitado por el ciudadano. Las actividades de cierre en el ciclo de atención son de doble naturaleza porque, en primera instancia, pueden obedecer a una nueva etapa de atención, que se haga por el mismo punto de atención inicial, o uno diferente. En segunda instancia, una vez prestada la atención al usuario, y si no hay nueva etapa de atención o requerimiento, se realizará una evaluación del servicio brindado, que ofrecen una oportunidad para el mejoramiento de los procesos de la entidad, y se obtendrá información del grado de satisfacción del ciudadano o usuario que demandó el servicio. Como es un ciclo, este enfoque de atención se repetirá, obteniendo niveles de información que permiten identificar datos estadísticos que mejorarán los procesos, optimizarán la información, agilizarán por automatización, etc. Así mismo, un <b><span class="cac">cierre</span></b> adecuado de atención a un ciudadano optimizará la resolución de solicitudes de servicios similares mejorando los niveles de respuesta al ciudadano.
      .py-3.py-md-4(titulo="Puntos de contacto en el ciclo de atención")
        .row.align-items-center.mb-4
          .col-lg-8
            h3 Puntos de contacto en el ciclo de atención
            .cajon-b.color-primario.p-4
              p Son los diferentes mecanismos que tiene el ciudadano para interrelacionarse con la entidad en cada una de las fases del ciclo de servicio, configurando los recursos de gestión básica en la atención al ciudadano. Un mismo tipo de contacto puede ser optativo para el ciudadano en cada una de las tres fases del ciclo de servicio; por ejemplo: el correo directo puede estar en la fase de preparación, donde la entidad informa sobre los requerimientos ante la solicitud hecha por el ciudadano, a su vez, la atención la presta por medio de correos y el cierre y entrega de los resultados, estos se entregan vía correo electrónico, así como se puede obtener la información de satisfacción por la misma vía. Regularmente las instituciones deben adecuar y programar la utilización de puntos de contacto en conformidad a sus recursos disponibles y sus facilidades tecnológicas; determinando cuales son idóneos para atender en cada una de las tres fases del ciclo de servicio, de tal manera que los momentos de verdad sean positivos y generen satisfacción. Entendiendo que los momentos de verdad son los puntos en el tiempo donde el ciudadano se relaciona con la entidad por medio de estos puntos, y donde obtiene un tipo de sensación o satisfacción la cual puede ser positiva o negativa.
          .col-lg-4
            figure
              img(src='@/assets/curso/t2/f11.png' alt='imagen relacionada')
          .col-lg-10.mx-auto
            .titulo-sexto.color-acento-contenido
              span Puntos de contacto vs. momento de verdad
            img(src='@/assets/curso/t2/f12.svg' alt='imagen relacionada')
            figcaption Nota: <a href="https://estrategia.gobiernoenlinea.gov.co/623/articles-8238_recurso_1.pdf" target="_blank">Ministerio de Tecnologías de la Información y Comunicaciones (2011). Guía de atención al ciudadano por múltiples canales. (Imagen modificada de producción propia)</a>
        p Dado que la percepción puede ser positiva o negativa en cada ocasión por lo cual hay que ser eficaz y eficiente en cada punto de contacto. Para construir una imagen positiva y de confianza de la entidad.
        .cajon.color-secundario.p-4
          p.mb-0 Es de vital importancia identificar en el proceso de atención al usuario, cuáles son los puntos de contacto que generan momentos de verdad negativos, ya que son los generadores de insatisfacción y por ende serán los que son sujetos de intervenir en mejora continua, o revaluar su idoneidad en el proceso.
      .py-3.py-md-4(titulo="Canales de atención al ciudadano")
        h3 Canales de atención al ciudadano
        p.mb-5 Constituyen los diferentes medios a través de los cuales, el ciudadano opta por canalizar su atención de servicio, y a su vez puede encontrar diversos o nuevos puntos de contacto.
        .col-lg-9.mx-auto
          .tabla-b.color-acento-contenido.mb-5
            table
              caption 
              tr.tabla-b__header.texto-blanco
                th
                  h5.mb-0 Canal
                th
                  h5.mb-0 Características
              tr
                td Presencial
                td Requiere el desplazamiento del ciudadano-cliente hasta la ubicación del punto de contacto. Ejemplo: oficinas de atención, kioscos de información, equipos de servicio itinerantes, cajeros automáticos, entre otros.
              tr
                td Impreso
                td Hace uso de texto sobre un medio físico como el papel. Ejemplo: correo postal, radicación de cartas, volantes, folletos, prensa, recibos, comprobantes del servicio.
              tr
                td Telefónico
                td Aprovecha las funcionalidades de voz y texto presentes en la telefonía fija y móvil. Ejemplo: <em>call centers</em>, <em>contact centers</em>, PBX, Sistemas de Respuesta de Voz Interactiva (<em>Interactive Voice Response</em> -IVR), sistemas de mensajes de texto SMS y MMS.
              tr
                td Audiovisual
                td Utiliza las ventajas comunicativas de la unión de sonido e imagen, con posibilidades de interactividad en el caso de la televisión digital. Ejemplo: videos, videollamada, mensajes de voz, programas de televisión, pautas comerciales, cortometrajes de cine.
              tr
                td Electrónico
                td Particularmente aprovechando Internet. Ejemplo: correo electrónico, mensajería instantánea (chat), foros, <em>blogs</em>, portales <em>web</em>, aplicaciones móviles, medios sociales.
          p Las organizaciones públicas en la actualidad, soportadas en un mayor impacto y alcance para la prestación al ciudadano, bien sea urbano o rural, optan por ajustar diversos canales y por ende tipos de contacto para atender al usuario o ciudadano, sin que ello implique detrimento de recursos, sino por el contrario, facilita la gestión en la atención.
      .py-3.py-md-4(titulo="Triángulo del servicio")
        h3 Triángulo del servicio
        p El triángulo del servicio es un esquema creado por Karl Albrecht, experto y consultor en gerencia del servicio y es la manera en la que algunas empresas integran los momentos de verdad para mejorar la experiencia con los clientes, donde a partir de sus actores como la entidad pública y su administración, los ciudadanos y los servidores establecen cómo debe ser su postura o rol para el principio fundamental que es la confianza en cumplimiento de su propósito misional y de atención al usuario, estableciendo métricas y análisis desde los mecanismos de canalización de servicios y de participación en general para su optimización y mejora:
        .titulo-sexto.color-acento-contenido
          span Triángulo del servicio del principio de confianza
        img(src='@/assets/curso/t2/f13.svg' alt='imagen relacionada').mb-4
        figcaption Fuente: <a href="https://www.funcionpublica.gov.co/documents/418537/506955/2016-09-26_Informe_rendicion_cuentas_2015_2016.pdf/c9dbfe38-5899-4167-9d45-18d2e75f0e6f?version=1.1&t=1475249023833&download=true" target="_blank">Departamento administrativo de la función pública, Rendición de Cuentas. (2016). diapositiva 10.</a>
      .py-3.py-md-4(titulo="Participación ciudadana")
        .row.align-items-center
          .col-lg-7
            h3 Participación ciudadana
            .cajon-b.color-primario.p-4
              p.mb-0 La Constitución Política de Colombia, establece que Colombia es una República democrática, participativa y pluralista. Uno de los fines esenciales del Estado es facilitar la participación de todos los ciudadanos en las decisiones que los afectan (vida económica, política administrativa y cultural). Las entidades deberán diseñar, mantener y mejorar los espacios que garanticen la participación ciudadana en todo el ciclo de la gestión pública (diagnóstico, formulación, implementación, evaluación y seguimiento). Desde el Direccionamiento Estratégico y Planeación, se debe incluir de manera explícita la forma como se facilitará y promoverá la participación ciudadana.
            .cajon-c.color-acento-contenido.p-4
              p.mb-0 Así mismo, la Ley 489 de 1998 y la Ley 1757 de 2015, busca la democratización e institucionalización de la participación ciudadana en la administración pública, promoviendo formas de convocatoria, y de organización de la sociedad, para  convocar a audiencias públicas, incorporar sus planes de desarrollo y de gestión de las políticas y programas encaminados a fortalecer la participación ciudadana, difundir y promover mecanismos de control social para brindar transparencia al ejercicio de la función administrativa; lo que le dará a las instituciones legitimidad y reconocimiento por la inclusión que favorece y fortalece la sociedad, pues se cohesiona llegando a acuerdos, mejora de resultados e impactos, generando un valor público en la sociedad.
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f14.png' alt='imagen relacionada')
        p.mb-5 De lo anterior, los niveles de participación ciudadana en la gestión pública se pueden categorizar por niveles, tal como se indica en la siguiente tabla, que desagrega la gestión estratégica en fases del ciclo:
        .col-lg-9.mx-auto.mb-4
          .titulo-sexto.color-acento-contenido
            span Ciclo de la gestión vs. niveles de la participación 
          img(src='@/assets/curso/t2/t2.svg' alt='Tabla relacionada').mb-4
          figcaption Nota: <a href="https://www.mincit.gov.co/servicio-ciudadano/informacion-para-el-ciudadano/mecanismos-de-participacion-ciudadana/participacion-en-la-formulacion-de-politicas/politica-de-participacion-ciudadana/2020-11-18-participacion-en-la-gestion.aspx" target="_blank">Función pública (s.f ) Imagen tomada de Página 35</a>
        p Entre las actividades que adelantan acciones promoviendo la participación ciudadana en la gestión pública se encuentran:
        ul.lista-ul.ms-4
          li 
            i.fas.fa-circle.cac
            | La identificación de problemas y diagnóstico de necesidades.
          li 
            i.fas.fa-circle.cac
            | Planeación y/o presupuesto participativo.
          li 
            i.fas.fa-circle.cac
            | Formulación de proyectos, normas, políticas o programas de largo plazo.
          li 
            i.fas.fa-circle.cac
            | Colaboración para la innovación.
          li 
            i.fas.fa-circle.cac
            | Jornadas de rendición de cuentas.
          li 
            i.fas.fa-circle.cac
            | Control ciudadano y veedurías.
        .col-lg-8
          a.anexo.mb-4(:href="obtenerLink('/downloads/2. Anexo-2021-03-23_Politica_servicio_al_ciudadano_actualizada.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Para poder sensibilizar el cómo formular la estrategia de participación ciudadana en la gestión, es recomendable leer la política de participación ciudadana en la gestión pública.
      .py-3.py-md-4(titulo="Protocolo de servicio")
        .row.align-items-center.mb-4
          .col-lg-7
            h3 Protocolo de servicio
            .cajon-b.color-secundario.p-4
              p El protocolo para la atención al ciudadano es un compendio de aspectos sobre los momentos de verdad y las actuaciones de los funcionarios, para desarrollar procedimientos y actividades en pro de la satisfacción del usuario, son a su vez un conjunto de normas discrecionales e internas que son establecidas por una entidad, para garantizar que la comunicación y los intercambios de información entre la entidad y ciudadanos sean satisfactorios y claros en sus posibilidades y limitaciones.
              p Se deben definir en lo posible un protocolo para cada uno de los canales de atención que la entidad tenga para interactuar con los ciudadanos:
          .col-lg-5
            figure
              img(src='@/assets/curso/t2/f15.png' alt='Tabla relacionada')
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/4EabquNz0ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        p Para clarificar y ampliar la configuración de un protocolo de servicios por tipo de canal, en conformidad a cada instancia del servicio antes de la atención, durante la atención o prestación del servicio y posterior a la prestación del servicio, se recomienda hacer la lectura y seguimiento de los casos de la Superintendencia de Transporte y de la Escuela de Administración pública ESAP:
        .row.align-items-center
          .col-lg-4
            a.anexo.mb-4(:href="obtenerLink('/downloads/3. Anexo-PROTOCOLO-ATENCION-AL-CIUDADANO-Superintendencia de transporte.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Protocolo De Servicio Al Ciudadano De La Superintendencia De Transporte
          .col-lg-4
            a.anexo.mb-4(:href="obtenerLink('/downloads/4. Anexo-PROTOCOLOS_SERVICIO-AL_CIUDADANO_ESAP.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Protocolo de atención al ciudadano ESAP

</template>

<script>
export default {
  name: 'Tema2',
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
