// Sticky secundary navbar
let offsetContent = document.getElementById('quienes-somos').offsetTop;

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y + 60 > offsetContent) {
    document.getElementById('sec-nav').classList.add('active');
  } else {
    document.getElementById('sec-nav').classList.remove('active');
  }
});

// Modals logic
const imgsContainers = document.querySelectorAll('.img-container');

imgsContainers.forEach((img, i) => {
  img.addEventListener('click', () => {
    setContent(i);
  });
});

const modalContent = [
  {
    title: 'Asesorías en energías renovables y temas ambientales',
    body:
      'Esta unidad de trabajo se ha especializado en asesorías técnicas a entidades implementadoras, tomadores/as de decisión, usuarios/as; en sí todo trabajo que no haga competencia a quienes ha formado o capacitado a lo largo de estos años (desde 1991 como PROPER); todo trabajo que se desarrolle de manera pionera; que traiga nuevos conocimientos al país y/o proyectos innovadores que ameritan una sistematización para devolverla a los usuarios(as) del CINER. <br><br> Se cuenta con experiencias en comunidades; con transferencias de tecnología; con levantamientos de información específica; con capacitación; elaboración de software especializado; elaboración de proyectos; formulación de estudios especializados y supervisión de proyectos.  Realizamos análisis de forma específica de las políticas implementadas, barreras existentes para la inclusión e incursión de la mujer en el área energética, riesgos y/o impactos en los ámbitos financieros, sociales/culturales, tecnológicos y de formación. Todo trabajo de este área y de todas las áreas de CINER tienen la mirada en el enfoque de género y la tolerancia cero contra la violencia hacia las mujeres.',
  },
  {
    title: 'Comunicación especializada en el sector energético',
    body:
      'CINER elabora documentación de acuerdo a grupos meta específicos:  menores de 12 años, mayores de 12 años, docentes, personal administrativo e incluso personas analfabetas.  Asimismo, a lo largo de estos años ha desarrollado diversos trabajos para la sistematización de información de proyectos y programas de cooperación internacional y cuenta con la habilitación por el Banco Mundial con «Number vendor» realizando diversos trabajos de traducción especializada, elaboración o impresión de documentos afines a energía.  Para estos documentos, CINER proporciona, según el trabajo:  comunicador(a) social, sectorialista en energía, diagramador(a), interpretes y/o traductores especializados en la temática, con enlaces en y para otros países.  Todo trabajo de este área y de todas las áreas de CINER son cero tolerancia contra la violencia hacia las mujeres.',
  },
  {
    title: 'Desarrollo de capacidades',
    body:
      'CINER ha desarrollado diversos cusos y modulos de capacitación para el desarrollo de capacidades; contando para ello con experiencia adquirida en el trabajo con profesores de institutos técnicos y Universidades con el PROCAM (Programa de capacitación modular). <br><br> CINER tiene una amplia experiencia en procesos y dinámicas grupales con idoneidad en el diseño y coordinación de talleres y sesiones de trabajo. Además cuenta con varias áreas adicionales: metodologías, tecnologías grupales, diseño de estructuras organizacionales y comunitarias, asesoría, caja de herramientas, técnicas diversas, etc. <br><br> Desde 1998 como integrantes de la Asociación Internacional de Facilitadores, CINER inicia una nueva etapa en la facilitación internacional, convirtiendose en organizador de diversos eventos como el Segundo Encuentro Latinoamericano de Facilitadores (SELF) en conjunto con la Asociación Internacional de Facilitadores (IAF) en Cochabamba – Bolivia el año 2000. El año 2004 participó en el Tercer Encuentro en Bariloche – Argentina y también apoyó la ejecución del Cuarto Encuentro Latinoamericano de Facilitadores en Guanajuato – México el 2011. El 2010 funda la Asociación Latinoamericana de Facilitadores – ALFA; con socios en 13 países, entre ellos: Perú, Bolivia, Argentina, Venezuela, Colombia, República Dominicana, Mexico, Brasil, Costa Rica entre otros países, por lo que el «expertise» y el trabajo en red en temas de facilitación es un tema transversal a diferentes áreas y ámbitos de trabajo. Los facilitadores/as son especialistas en diversos ejes temáticos:  Gestión y desarrollo organizacional; Desarrollo comunitario y cambio social; Desarrollo personal y gestión del ser; Diversidad, interculturalidad y género; así como la Facilitación como disciplina profesional. El 2014, se apoyó en la ejecución del Quinto Encuentro Latinoamericano de Facilitadores en Bogotá – Colombia y el 2017  nuevamente en Cochabamba – Bolivia. Mayor información sobre los ejes temáticos se encuentra en: http://alfa-facilitadores.org/encuentroalfa2014/  o http://alfa-facilitadores.org/bolivia-2017/ <br><br> Asimismo, CINER cuenta con la Licencia para América Latina otorgada por Denkmodell de Alemania para Planificación estratégica, denominada: SINFONIA®:  “Sistémica Interpretación de la Naturaleza de Factores que influyen sobre las Organizaciones y sus nexos Internos y Ambientales». Esta licencia se la obtuvo en 1996 y se ha aplicado desde CINER en talleres realizados en Paraguay, Perú, República Dominicana, Salvador, México, Ecuador, Bolivia, Brasil, entre otros muchos países.   Todo trabajo de este área y de todas las áreas de CINER se trabajan con enfoque de género y simpre contra un gran flagelo como es la violencia hacia las mujeres. ',
  },
  {
    title: 'Planificación, monitoreo y evaluación',
    body:
      'Se reconoce y se otorga acceso a la información especializada a los usuarios del Centro de Información en Energías Renovables, con el propósito de que puedan buscar, recibir, acceder y difundir información relacionada a energía, electrificación rural, ambiente, planificación, monitoreo, evaluación, legislación y desarrollo rural, como un derecho y un requisito indispensable para el desarrollo de las comunidades, instituciones y empresas involucradas en el sector, como un insumo básico para ejercicio de la ciudadanía, a través de las líneas específicas de: Biblioteca, Sistemas de información geográfico y software especializado. <br><br> CINER como centro de información cuenta con gran cantidad de información generada de manera directa o de manera secundaria; con la capacidad de poder realizar análisis e investigaciones diversas en la temática.  Cuenta con una amplia red de actores en la región; lo cual le permite también contar con datos actuales y/o conocimientos de dónde adquirir la misma.  Es parte de la Red de Centros de Documentación, con especialistas en bibliotecología, manejo de bases de datos y programas especializados para el manejo de información que posibiliten una búsqueda rápida de determinados temas y/o para decisiones o planeación estratégica y operativa en el sector. <br><br> Es grato confirmar la integración de CINER a la Red de centros de Documentación de Energía de América Latina – REALC en convenio con la Organización Latinoamericana de Energía – OLADE.  El aporte desde CINER se realiza tanto con el listado de sus documentos físicos como virtuales. Visite la colección de CINER en la página de REALC.  Se ha incluido también información referente a Riesgos  como los específicos de género, riesgos en el mercado energético, riesgo con la aceptación social, riesgo de abastecimiento de mano de obra, riesgo financiero, riesgo de crédito (posibilidad de pagar), riesgo tecnológico e información general sobre el tema de apoyo a la mujer especialmente con apego a la Ley 0348.  Es por ello, y por diversos trabajos y capacitaciones con la Cooperación Alemana para el Desarrollo, especificamente con el Programa Regional “Combatir la Violencia contra las Mujeres en Latinoamérica” – ComVoMujer – y el Instituto de Investigación de la Facultad de Ciencias Administrativas y Recursos Humanos de la Universidad de San Martín de Porres (USMP), interesados en combatir la violencia contra las mujeres y sus efectos negativos en los negocios, han unido esfuerzos para crear una web que compartimos plenamente:  http://www.mujereslibresdeviolencia.usmp.edu.pe/nuestrs-consultors-bolivia-empresa-segura/',
  },
  {
    title: 'Organización y facilitación de eventos',
    body:
      'Desde el año 1991 a la fecha, como parte del Programa bilateral Bolivia – Alemania; se desarrolló un paquete de capacitación en energías renovables, denominado PROCAM (Programa de capacitación modular) en sistemas termosolares, fotovoltaicos principalmente para su transferencias a entidades educativas como: Universidades e institutos técnicos.  Ya como CINER desde 1997 se han desarrollado diversos cursos y materiales específicos para diferentes actores en la cadena energética incorporando cursos en micro y mini centrales hidroeléctricas tanto en ámbitos nacionales como internacionales; sumado a la mejora de los textos ya preparados para energía solar.  Se incrementaron cursos orientados a tomadores de decisión y también en políticas energéticas. <br><br> En cuanto a eventos especializados; CINER ha tenido bajo su responsabilidad eventos de gran magnitud como el desarrollado el año 2003; bajo solicitud de los financiadores y países de la región latinoamericana para que – con su experiencia en temas energéticos, de facilitación, organización, planificación, monitoreo y evaluación; pueda ser el enlace para el Secretariado Técnico (liderado por la Organización de Estados Americanos) para la elaboración de 8 planes nacionales de Energía:  México, Salvador, República Dominicana, Guatemala, Ecuador, Perú, Brasil y Bolivia; en el marco de ALIANZA GLOBAL DE ENERGÍA COMUNAL – Aprovechando la energía para la  reducción de la pobreza, LATINO AMÉRICA Y EL CARIBE (GVEP-LAC) – y organizando diversos días de talleres específicos en la denominada «CONFERENCIA REGIONAL GVEP LAC», contando con la presencia del Vice presidente de la república, un Ex mandatario de Bolivia, así como ministros y viceministros del área y signantes del acuerdo para la Alianza Global en Johannesburgo. <br> ',
  },
  {
    title: 'Gestión de información',
    body:
      'Ésta unidad de trabajo desarrolla sus aplicaciones y las sistematiza para conocimiento del público objetivo de CINER. <br><br> Los socios fundadores:  Walter Canedo E. y Alba Gamarra de Guardia; han escrito el “Manual de Monitoreo y Evaluación de Programas y Proyectos energéticos”.  Material elaborado por encargo de IT Power en el marco del Proyecto ”Crecer con Energía”, Unión Europea.  Presentación para Bolivia en Octubre de 2007 y en Paraguay en marzo de 2008. <br><br> Asimismo, la GIZ ha impreso el libro “Energising development – Bolivia, la Aplicación del Monitoreo y Evaluación”  GIZ, EnDev Acceso a Energía y Embajada del Reino de los países Bajos.  ISBN:  978-99954-778-3-7.  Este libro es resultante del trabajo de Monitoreo y Evaluación en co-autoria con: Jaime Sologuren, Gabriela Gemio y Alba Gamarra de Guardia.  2010. <br><br> CINER cuenta con distintos materiales especializados en estos temas, para lo cual trabaja también con licencias europeas en temas de planeación estratégica y aplica a la realidad específica del cliente los instrumentos que sean útiles y necesarios para sus planes operativos; así como para la adecuada retroalimentación y apoyo en tomas de decisiones. <br><br> CINER apoya en planes estratégicos y operativos; así como en el diseño de sistemas de monitoreo y evaluación, razón por la que ha sido convocado a armar planes nacionales de energía para 8 países por encargo de la Organización de Estados Americanos y el Banco Mundial; planes y sistemas de seguimiento por encargo de agencias de cooperación internacional, principalmente la Cooperación alemana al desarrollo – GIZ.',
  },
];

function setContent(i) {
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerHTML = modalContent[i].title;
  modalBody.innerHTML = modalContent[i].body;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Hamburger navbar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const burger2 = document.querySelector('.burger2');
  const nav = document.querySelector('.main-nav');
  const navMini = document.querySelector('.nav-mini');
  const navLinks = document.querySelectorAll('.main-nav li');
  const navLinksMini = document.querySelectorAll('.nav-mini li');
  const box = document.querySelector('.text-box');

  // Toggle NavBar
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    box.classList.toggle('burguer-on');
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
    box.style.animation = 'boxFadeIn 3s ease';
  });

  // Toggle NavBar Mini
  burger2.addEventListener('click', () => {
    navMini.classList.toggle('nav-active');
    // Animate links
    navLinksMini.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger Animation
    burger2.classList.toggle('toggle');
  });
};

navSlide();
