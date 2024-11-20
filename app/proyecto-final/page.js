import Navbar from "../Navbar";
import Image from "next/image";

const ProyectoFinal = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Sección 1: Historia de su creación, proceso hasta la actualidad y antecedentes */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Historia de su creación, proceso hasta la actualidad y antecedentes
          </h1>

          {/* Sub-sección 1.1: Antecedentes y necesidad de creación */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Antecedentes y necesidad de creación
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            En un mundo empresarial cada vez más competitivo, la capacidad de
            analizar datos en tiempo real y extraer información valiosa se
            convirtió en una prioridad para las organizaciones. Durante la
            década de 2000, las empresas comenzaron a acumular grandes volúmenes
            de datos debido al avance en sistemas de gestión empresarial,
            aplicaciones web y dispositivos móviles. Sin embargo, transformar
            estos datos en conocimientos accesibles y comprensibles seguía
            siendo un desafío.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Microsoft identificó esta necesidad en el mercado: las herramientas
            de análisis de datos disponibles eran complicadas, costosas y, en
            muchos casos, requerían conocimientos técnicos avanzados. Las
            empresas necesitaban una solución que fuera intuitiva, asequible y
            eficiente para facilitar la toma de decisiones basadas en datos.
          </p>

          {/* Sub-sección 1.2: Orígenes y desarrollo inicial */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Orígenes y desarrollo inicial
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La historia de Power BI comenzó en 2010 con el desarrollo de
            complementos de análisis para Excel: Power Pivot y Power Query.
            Estas herramientas ofrecían capacidades básicas de modelado y
            análisis de datos, pero estaban limitadas al entorno de Excel.
            Microsoft visualizó un producto más robusto que pudiera aprovechar
            estas capacidades y llevarlas a una plataforma independiente.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En 2013, Microsoft lanzó la primera versión de Power BI como parte
            de Office 365. Este lanzamiento inicial permitió a los usuarios
            conectar datos de diferentes fuentes, visualizarlos mediante
            gráficos interactivos y compartir reportes a través de la nube.
          </p>

          {/* Sub-sección 1.3: Evolución hacia la versión actual */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Evolución hacia la versión actual
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El año 2015 marcó un hito importante para Power BI, cuando Microsoft
            relanzó la herramienta como una solución autónoma, Power BI Desktop,
            junto con un servicio en la nube, Power BI Service. Este cambio
            amplió las capacidades del producto, permitiendo a los usuarios
            crear reportes más avanzados sin depender de Excel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Desde entonces, Microsoft ha continuado invirtiendo en el desarrollo
            de Power BI, incorporando inteligencia artificial, conectores para
            diversas bases de datos y aplicaciones, y funciones de colaboración.
            Hoy, Power BI se encuentra entre las herramientas líderes en
            inteligencia empresarial (BI) en el mundo, reconocido por su
            facilidad de uso, integración con otras soluciones de Microsoft
            (como Azure y Teams) y una comunidad activa de usuarios.
          </p>

          {/* Sub-sección 1.4: Necesidad que inspiró su creación */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Necesidad que inspiró su creación
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La inspiración para Power BI radicó en la creciente demanda de
            herramientas accesibles que democratizaran el acceso al análisis de
            datos. Microsoft identificó que, en muchas organizaciones, los
            análisis de datos estaban restringidos a especialistas. La visión de
            Power BI era empoderar a cualquier usuario, independientemente de su
            nivel técnico, para analizar, visualizar y compartir datos.
          </p>
          {/* Sección 2: Vida útil y las 7 fases del ciclo de vida de Microsoft Power BI */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Vida útil y las 7 fases del ciclo de vida de Microsoft Power BI
          </h1>

          {/* Sub-sección 2.1: Vida útil de Microsoft Power BI */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Vida útil de Microsoft Power BI
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La vida útil de Microsoft Power BI es excepcionalmente dinámica
            gracias al modelo de desarrollo continuo que Microsoft ha
            implementado. Este enfoque asegura que la herramienta no se quede
            obsoleta y permanezca actualizada frente a los rápidos avances
            tecnológicos y las necesidades cambiantes de las empresas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Fase inicial (2010-2015):</strong> En esta etapa, Power BI
            comenzó como un complemento experimental para Excel. Aunque
            limitado, estableció la base para su funcionalidad actual.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Crecimiento (2015-2020):</strong> Power BI se consolidó
            como una solución independiente. Durante este tiempo, su popularidad
            aumentó significativamente debido a su accesibilidad y su capacidad
            para competir con soluciones más complejas y costosas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Madurez (2020 en adelante):</strong> Actualmente, Power BI
            se encuentra en su etapa de madurez. Microsoft sigue implementando
            mejoras, manteniéndolo como líder del mercado. La herramienta es
            utilizada por empresas de todos los tamaños y sectores.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            El modelo de suscripción, las actualizaciones mensuales y su
            integración con el ecosistema de Microsoft garantizan una vida útil
            prolongada, mientras que su adopción global asegura que permanecerá
            relevante durante muchos años más.
          </p>
          {/* Sección 3: Las 7 fases del ciclo de vida de Microsoft Power BI */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Las 7 fases del ciclo de vida de Microsoft Power BI
          </h1>

          {/* Sub-sección 3.1: Planificación */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            1. Planificación
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Durante esta fase, Microsoft identificó la necesidad de una
            herramienta accesible de inteligencia empresarial. El objetivo
            principal era democratizar el análisis de datos para usuarios sin
            conocimientos técnicos avanzados.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Microsoft consideró factores clave como la integración con sus
            otros productos, la accesibilidad a través de la nube y el bajo
            costo.
          </p>

          {/* Sub-sección 3.2: Análisis */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            2. Análisis
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Microsoft investigó las necesidades específicas de las empresas,
            como la conectividad con múltiples fuentes de datos, la capacidad de
            modelado y la facilidad de uso.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Se analizaron las deficiencias de las herramientas existentes en
            el mercado y se decidió adoptar un enfoque orientado al usuario
            final.
          </p>

          {/* Sub-sección 3.3: Diseño */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            3. Diseño
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • El diseño inicial se centró en crear una interfaz intuitiva y
            herramientas potentes para la visualización de datos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Power BI fue diseñado para ser compatible con múltiples fuentes de
            datos (bases de datos, APIs, hojas de cálculo) y para permitir un
            alto grado de personalización.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Esta fase también incluyó el diseño de una arquitectura escalable,
            utilizando la nube como base para garantizar un rendimiento óptimo.
          </p>

          {/* Sub-sección 3.4: Desarrollo */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            4. Desarrollo
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Microsoft construyó Power BI sobre tecnologías clave como Power
            Query, Power Pivot y Power View. Estas tecnologías fueron mejoradas
            y adaptadas para crear una solución integrada.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • El desarrollo se realizó iterativamente, con prototipos que fueron
            refinados en función de los comentarios de los usuarios.
          </p>

          {/* Sub-sección 3.5: Implementación */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            5. Implementación
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • En 2013, se lanzó la primera versión de Power BI dentro de Office
            365.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • En 2015, con el relanzamiento de Power BI como una solución
            independiente, Microsoft implementó un modelo de suscripción,
            haciendo que la herramienta estuviera disponible tanto para pequeñas
            empresas como para grandes corporaciones.
          </p>

          {/* Sub-sección 3.6: Mantenimiento */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            6. Mantenimiento
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Microsoft ha adoptado un enfoque de mejora continua, lanzando
            actualizaciones mensuales que incluyen nuevas características,
            mejoras en el rendimiento y solución de errores.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • La retroalimentación de los usuarios y las tendencias del mercado
            han sido factores clave en esta etapa.
          </p>

          {/* Sub-sección 3.7: Evolución */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            7. Evolución
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Actualmente, Power BI sigue evolucionando con el uso de
            inteligencia artificial, capacidades de análisis predictivo y una
            integración más profunda con servicios como Azure, Teams y Dynamics
            365.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Microsoft ha posicionado a Power BI como una herramienta
            fundamental en la transición hacia la analítica avanzada y la
            automatización.
          </p>
          {/* Sección 4: Proyección de uso de Microsoft Power BI en los próximos años */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Proyección de uso de Microsoft Power BI en los próximos años
          </h1>

          {/* Sub-sección 4.1: Expansión del mercado de la analítica de datos (2024-2026) */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            1. Expansión del mercado de la analítica de datos (2024-2026)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Democratización de los datos:</strong> Power BI seguirá
            jugando un papel clave en la democratización del análisis de datos,
            permitiendo que usuarios sin formación técnica aprovechen el poder
            de los datos para la toma de decisiones.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Proyección:</strong> Se espera que las pequeñas y medianas
            empresas adopten aún más la herramienta, impulsadas por su precio
            accesible y su facilidad de uso.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Mayor integración con IA:</strong> Las capacidades de
            inteligencia artificial y aprendizaje automático integradas en Power
            BI, como los análisis predictivos y las sugerencias automatizadas,
            serán un diferenciador clave.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Impacto:</strong> Las empresas utilizarán estas funciones
            para identificar patrones, anticiparse a tendencias y tomar
            decisiones proactivas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Adopción en mercados emergentes:</strong> La adopción de
            Power BI crecerá significativamente en mercados emergentes, donde la
            transformación digital está acelerándose.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Ejemplo:</strong> Sectores como educación, salud y comercio
            minorista utilizarán Power BI para optimizar operaciones y mejorar
            la experiencia del cliente.
          </p>

          {/* Sub-sección 4.2: Consolidación en la nube y análisis en tiempo real (2026-2030) */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            2. Consolidación en la nube y análisis en tiempo real (2026-2030)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Mayor dependencia del análisis en la nube:</strong> Con la
            creciente adopción de soluciones basadas en la nube, Power BI
            continuará integrándose profundamente con Microsoft Azure y otros
            servicios en la nube.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Proyección:</strong> Las empresas priorizarán los análisis
            en tiempo real, habilitados por Power BI, para monitorear
            operaciones críticas y responder rápidamente a cambios en el
            mercado.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Soporte para datos IoT:</strong> Power BI se integrará más
            con dispositivos IoT para proporcionar análisis en tiempo real sobre
            datos generados por sensores, lo que será clave en industrias como
            la manufactura, transporte y energía.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Impacto:</strong> Esto posicionará a Power BI como una
            herramienta esencial en la transformación hacia la Industria 4.0.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Analítica integrada:</strong> Se espera que Power BI sea
            aún más compatible con aplicaciones empresariales como Teams,
            Dynamics 365 y Salesforce, permitiendo un flujo continuo de
            información.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Beneficio:</strong> Los usuarios podrán acceder a análisis
            sin salir de sus plataformas de trabajo habituales.
          </p>

          {/* Sub-sección 4.3: Personalización y analítica avanzada (2030 en adelante) */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            3. Personalización y analítica avanzada (2030 en adelante)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Experiencia del usuario personalizada:</strong> Power BI
            utilizará modelos de IA avanzados para personalizar la experiencia
            del usuario, adaptando paneles y recomendaciones en función de las
            preferencias individuales y roles organizativos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Ejemplo:</strong> Los gerentes recibirán métricas
            estratégicas, mientras que los operadores verán datos específicos de
            sus tareas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Mayor seguridad y cumplimiento normativo:</strong> A
            medida que las regulaciones de datos se vuelven más estrictas (por
            ejemplo, GDPR y CCPA), Power BI continuará implementando
            herramientas avanzadas de cumplimiento y seguridad.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Proyección:</strong> La confianza en Power BI aumentará
            entre sectores sensibles como el financiero y el de la salud.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Interacción mediante lenguaje natural:</strong> La
            herramienta evolucionará hacia una interacción basada en lenguaje
            natural, donde los usuarios podrán &quot;hablar&quot; con Power BI
            para generar reportes o responder preguntas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Impacto:</strong> Esto reducirá la barrera de entrada y
            fomentará un uso más inclusivo.
          </p>

          {/* Sub-sección 4.4: Microsoft Power BI como estándar global */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            4. Microsoft Power BI como estándar global
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Liderazgo en analítica empresarial:</strong> En el largo
            plazo, Power BI se posicionará como un estándar global en
            herramientas de analítica de datos, consolidando su lugar frente a
            competidores como Tableau y Qlik.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Proyección:</strong> Su adopción será casi universal en
            empresas medianas y grandes, mientras que su versión gratuita
            seguirá siendo popular entre startups y freelancers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Ecosistemas integrados:</strong> Microsoft probablemente
            expandirá Power BI como parte de un ecosistema integral de
            soluciones inteligentes, integrando tecnologías emergentes como
            realidad aumentada y análisis de datos en entornos 3D.
          </p>
          {/* Sección 5: Estudio de Caso: Implementación de Power BI en una Empresa de Retail */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Estudio de Caso: Implementación de Power BI en una Empresa de Retail
          </h1>

          {/* Sub-sección 5.1: Antecedentes */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Antecedentes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La empresa Retail Solutions SA es una cadena mediana de tiendas de
            ropa con operaciones en varias ciudades del país. Desde su fundación
            en 2005, la empresa ha crecido rápidamente, pero ha enfrentado
            desafíos significativos relacionados con la gestión y el análisis de
            datos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Antes de implementar Power BI, la empresa dependía de hojas de
            cálculo y sistemas ERP básicos para llevar un registro de ventas,
            inventarios y datos de clientes. Estos métodos tradicionales de
            análisis de datos generaban varios problemas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>
              <strong>Falta de visibilidad en tiempo real:</strong> Los reportes
              de ventas y desempeño se generaban manualmente cada fin de mes, lo
              que limitaba la capacidad de tomar decisiones oportunas.
            </li>
            <li>
              <strong>Falta de integración:</strong> Los datos de ventas,
              inventarios y clientes estaban dispersos en diferentes sistemas y
              departamentos, lo que dificultaba tener una visión unificada.
            </li>
            <li>
              <strong>Errores humanos frecuentes:</strong> El manejo manual de
              grandes volúmenes de datos en hojas de cálculo llevaba a errores,
              duplicidad de datos y confusión en los reportes.
            </li>
          </ul>

          {/* Sub-sección 5.2: Problema */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Problema
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El principal problema que enfrentaba Retail Solutions SA era la
            falta de herramientas de análisis dinámico y visualización de datos
            en tiempo real. Esto dificultaba la identificación de tendencias de
            ventas, productos más populares y la planificación eficiente de
            inventarios. Como resultado:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>
              <strong>Pérdidas económicas:</strong> Algunos productos se
              quedaban en stock por mucho tiempo, mientras que otros con alta
              demanda se agotaban rápidamente.
            </li>
            <li>
              <strong>Clientes insatisfechos:</strong> La falta de productos en
              stock generaba insatisfacción y pérdida de clientes.
            </li>
            <li>
              <strong>Toma de decisiones lenta:</strong> Los reportes se
              generaban con semanas de retraso, lo que hacía que la gerencia
              reaccionara tarde a los cambios del mercado.
            </li>
          </ul>

          {/* Sub-sección 5.3: Necesidad */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Necesidad
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La empresa requería una solución que:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>
              <strong>Centralizara y unificara los datos:</strong> Para tener
              una única fuente de verdad donde todos los departamentos pudieran
              acceder a datos actualizados.
            </li>
            <li>
              <strong>Proporcionara análisis en tiempo real:</strong> Ayudando a
              tomar decisiones rápidas y basadas en datos.
            </li>
            <li>
              <strong>Facilitará la visualización de datos:</strong> Usando
              gráficos dinámicos y dashboards interactivos accesibles para todo
              el equipo.
            </li>
            <li>
              <strong>Automatización de procesos:</strong> Reduciendo el tiempo
              y los errores asociados con el manejo manual de datos.
            </li>
          </ul>

          {/* Sub-sección 5.4: Implementación de Power BI */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Implementación de Power BI
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Duración del Proyecto:</strong> 4 meses
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            • <strong>Fases de implementación:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>
              <strong>Análisis de necesidades y planeación:</strong>
              Identificación de fuentes de datos principales (ERP, sistemas POS,
              hojas de cálculo). Determinación de indicadores clave de desempeño
              (KPIs), como ventas por tienda, rotación de inventarios y
              satisfacción del cliente.
            </li>

            <li>
              <strong>Integración de datos:</strong> Configuración de Power BI
              para conectarse al ERP, sistemas POS y bases de datos en la nube.
              Limpieza y modelado de datos para garantizar consistencia y
              calidad.
            </li>
            <li>
              <strong>Diseño de dashboards:</strong> Creación de dashboards
              personalizados para cada departamento (ventas, operaciones,
              marketing). Visualización de KPIs en tiempo real, con filtros
              interactivos por ubicación, producto y período.
            </li>
            <li>
              <strong>Capacitación:</strong> Entrenamiento del personal en el
              uso de Power BI para maximizar la adopción y efectividad de la
              herramienta.
            </li>
          </ul>

          {/* Sub-sección 5.5: Resultados */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Resultados
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La implementación de Power BI transformó las operaciones de Retail
            Solutions SA:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>
              <strong>Toma de decisiones basada en datos:</strong> Los gerentes
              ahora tienen acceso a dashboards en tiempo real, lo que les
              permite reaccionar rápidamente a cambios en las tendencias de
              ventas y ajustar estrategias.
            </li>
            <li>
              <strong>Reducción de costos:</strong> La empresa optimizó sus
              inventarios, reduciendo productos obsoletos y aumentando la
              disponibilidad de artículos más vendidos.
            </li>
            <li>
              <strong>Mejora en la satisfacción del cliente:</strong> La
              capacidad de prever demandas y mantener los productos más
              populares en stock incrementó la fidelización de los clientes.
            </li>
            <li>
              <strong>Ahorro de tiempo:</strong> Se eliminaron procesos
              manuales, permitiendo al personal concentrarse en análisis
              estratégicos en lugar de recopilación de datos.
            </li>
          </ul>

          {/* Sub-sección 5.6: Conclusión */}
          <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2">
            Conclusión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La implementación de Power BI permitió a Retail Solutions SA superar
            sus desafíos relacionados con la gestión de datos, logrando una
            ventaja competitiva significativa en el mercado. Este caso muestra
            cómo una herramienta de análisis avanzada puede transformar la
            operación de una empresa, brindando datos valiosos para optimizar
            procesos, aumentar la rentabilidad y mejorar la experiencia del
            cliente.
          </p>
          <Image
            src="/img/Mapa conceptual.png"
            alt="Diagrama de Componentes del Software"
            width={6611}
            height={4007}
            className="w-full h-auto object-contain mx-auto mt-10 rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default ProyectoFinal;
