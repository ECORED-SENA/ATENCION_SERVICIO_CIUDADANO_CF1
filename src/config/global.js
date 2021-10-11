export default {
  global: {
    componenteFormativo: 'Atención al ciudadano y procedimiento de servicio',
    descripcionCurso:
      'La atención y servicio al ciudadano es el punto de encuentro e interacción que los habitantes del país, como parte de la comunidad en general, tienen con las instituciones públicas, de gobierno y Estado en general, permitiéndoles solicitar consultas, radicar requerimientos específicos según la entidad a la que se refiere; siendo las entidades las garantes del cumplimiento y generación de la información sobre la gestión, resultados y respuestas específicas a los ciudadanos que la requieran.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-play',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estado y estructura de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de Estado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura y servicios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Entidaes públicas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Funcionarios públicos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Política y Programa Nacional de Servicio al Ciudadano',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Normas de calidad: ISO 9000, NTC GP 1000',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El proceso de atención al ciudadano',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguimiento y verificación de respuesta',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Reconocimiento de responsables y funciones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Orientación y atención del servicio a prestar',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Verificación del servicio y rendición de cuentas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Efectividad del servicio y percepción del usuario',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía de Rionegro, Departamento de Antioquía. Informe de seguimiento a las Peticiones, Quejas, Reclamos y Sugerencias – PQRS. (diciembre 2020). ',
      link:
        'https://rionegro.gov.co/wp-content/uploads/2021/02/INFORME-DE-EVALUACION-Y-SEGUIMIENTO-PQRS-SEMESTRE.pdf',
    },
    {
      referencia:
        'Comité Institucional de Desarrollo Administrativo (25 de abril de 2018). Presentación del Modelo Integrado de Planeación y Gestión MIPG II. ',
      link:
        'https://www.minenergia.gov.co/documents/10192/23967557/040518_modelo_integrado_planeacion_gest_2018.pdf/7b7a0db5-91c3-43c6-a922-343f14234a8e ',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. Política de Participación ciudadana en la gestión pública. (s.f.). ',
      link:
        'https://www.mincit.gov.co/servicio-ciudadano/informacion-para-el-ciudadano/mecanismos-de-participacion-ciudadana/participacion-en-la-formulacion-de-politicas/politica-de-participacion-ciudadana/2020-11-18-participacion-en-la-gestion.aspx ',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. Rendición de cuentas, un derecho de la ciudadanía (sf). ',
      link:
        'https://www.funcionpublica.gov.co/preguntas-frecuentes/-/asset_publisher/sqxafjubsrEu/content/rendicion-de-cuentas-un-derecho-de-la-ciudadania/28585938',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública, 2019. Manual Operativo del Modelo Integrado de Planeación y Gestión. (s.f.) ',
      link:
        'https://www.funcionpublica.gov.co/documents/28587410/34112007/Manual+Operativo+MIPG.pdf/ce5461b4-97b7-be3b-b243-781bbd1575f3',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. 2018. Modelo Integrado de Planeación y Gestión. (2018). ',
      link:
        'https://secretariageneral.gov.co/sites/default/files/mipg_dimension_2_-_direccionamiento_estrategico_y_planeacion.pdf',
    },
    {
      referencia:
        'Departamento nacional de planeación (diciembre de 2020). Actualización de lineamientos de la política pública de servicio al ciudadano. ',
      link:
        'https://www.funcionpublica.gov.co/documents/28587425/38023044/Actualizacion_lineamientos_PSC_.pdf/c86bc918-b6a7-46c4-6a14-e85faa066e20?t=1611078127878 ',
    },
    {
      referencia:
        'Dirección de Participación, Transparencia y Servicio al Ciudadano (octubre de 2019). Políticas de Participación y rendición de cuentas. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/pres-participacion-gestion-publica-minsalud-dafp.pdf ',
    },
    {
      referencia:
        'Funcionario Público. Qué es, función, tipos, servidor público. (2021). ',
      link: 'https://concepto.de/funcionario-publico ',
    },
    {
      referencia:
        'Icontec. Norma Técnica de Calidad en la Gestión Pública. (s.f). ',
      link: 'http://apolo.uniatlantico.edu.co/SIG/NTC%20GP1000-2009.pdf',
    },
    {
      referencia:
        'Ministerio de las tecnologías de la información y las comunicaciones. Guía de atención al ciudadano-Clientes por múltiples Canales. (2011). ',
      link:
        'https://estrategia.gobiernoenlinea.gov.co/623/articles-8238_recurso_1.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. Decreto 2623 de 2009, por el cual se crea el Sistema Nacional de Servicio al Ciudadano. (2009). ',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Decreto_2623_2009.pdf',
    },
    {
      referencia:
        'Rama Ejecutiva, orden Nacional. Manual de estructura del Estado colombiano. Función Pública. (s.f). ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/manual-estado/ejecutiva-orden-nacional.php',
    },
    {
      referencia:
        'Wilson Hernando Ladino Orjuela. (2018). Organización del Estado Colombiano y Formas Organizativas del Estado a Nivel Territorial. Escuela Superior de Administración Pública. Bogotá.',
    },
  ],
  glosario: [
    {
      termino: 'Ciudadano',
      significado:
        'Es todo individuo o persona considerada como miembro activo de la sociedad y del Estado, que es sujeto de derechos en igualdad a todos los miembros nacidos en el mismo territorio, condición que pueden adoptar los extranjeros bajo condiciones específicas de ser su interés.',
    },
    {
      termino: 'PQRSDF',
      significado:
        'Es la sigla que representa los tipos de atención que requiere una persona natural o jurídica, la cual se puede clasificar en Peticiones, Quejas, Reclamos, Sugerencias, Denuncias o felicitaciones.',
    },
    {
      termino: 'Canales de acceso',
      significado:
        'En atención y servicio al ciudadano, son los diferentes medios a través de los cuales, el ciudadano puede optar por enrutar su solicitud y de atención para que sea atendida',
    },
    {
      termino: 'Atención al ciudadano',
      significado:
        'Es el conjunto de acciones que desarrollan las entidades para resolver las necesidades de los ciudadanos en términos de acceso a productos, servicio, información, o cualquier necesidad que lo aqueja, y que garanticen el disfrute de los derechos o su restitución.',
    },
    {
      termino: 'Estado',
      significado:
        'Es un compendio ideológico político de organización social, que requiere de diversas subdivisiones o instituciones que reglamentan la vida, el derecho y actuación de los habitantes o ciudadanos dentro del territorio.',
    },
    {
      termino: 'Satisfacción del ciudadano',
      significado:
        'Es la manifestación del ciudadano que expresa su conformidad con la atención y el servicio recibido ante la entidad que tramitó su requerimiento.',
    },
    {
      termino: 'Protocolo de servicio',
      significado:
        'Es el conjunto de acciones que en una Entidad se deben diseñar y apropiar por parte de los funcionarios públicos, para una oportuna y satisfactoria atención en los requerimientos de un ciudadano, teniendo la particularidad de actividades según el canal por medio del cual se atienden las peticiones.',
    },
    {
      termino: 'Caracterización',
      significado:
        'Es el estudio de los rasgos generales de poblaciones específicas, pero con algún aspecto de necesidad o rasgo común como ciudadanos, para tener atención por parte de la entidad pública, facilitando el diseño de protocolos, diseño de servicios, elección de canales de atención, entre otros.',
    },
  ],
  complementario: [
    {
      texto:
        'Departamento nacional de planeación (diciembre de 2020). Actualización de lineamientos de la política pública de servicio al ciudadano.',
      tipo: 'PDF',
      descarga:
        'https://www.funcionpublica.gov.co/documents/28587410/38139874/2021-03-23_Politica_servicio_al_ciudadano_actualizada.pdf/a8f37301-0e89-d6da-9708-ce72772cde6f?t=1619450714666#:~:text=La%20Pol%C3%ADtica%20de%20Servicio%20al%20Ciudadano%20se%20define%20entonces%20como,de%20relacionamiento%20con%20el%20Estado.&text=protecci%C3%B3n%20 constitucional.',
    },
    {
      texto:
        'Departamento Administrativo de la Función Pública (s.f). Modelo de servicio al ciudadano del departamento administrativo de la Función pública – EVA (s.f)',
      tipo: 'PDF',
      descarga:
        'https://www.funcionpublica.gov.co/documents/418537/506977/Modelo+de+Servicio+al+Ciudadano.pdf/cb387d66-6f52-4568-b075-c492ffa6a8c1?version=1.0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'CIES TIC - Regional Norte de Santander',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
