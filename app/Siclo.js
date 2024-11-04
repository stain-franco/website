// app/Siclo.js
import Navbar from "./Navbar";

export default function Siclo() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Informe sobre el Ciclo de Vida de Arquitectura de Software para un
            Sistema de Monitoreo Doméstico en IoT
          </h1>

          {/* Sección de Introducción */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Introducción
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El desarrollo de un sistema de monitoreo doméstico basado en
              Internet de las Cosas (IoT) plantea la posibilidad de optimizar la
              seguridad y comodidad en el hogar a través de sensores conectados
              y controles automatizados. El propósito de este sistema es
              gestionar cámaras, sensores de movimiento, dispositivos de cierre
              de puertas y ventanas, así como funciones de automatización, todo
              de manera integrada. Dado que este sistema requiere
              actualizaciones constantes y debe adaptarse a entornos cambiantes,
              se ha seleccionado el enfoque Ágil dentro del Ciclo de Vida de
              Desarrollo de Software (SDLC). Este enfoque permite trabajar en
              iteraciones adaptativas, entregando valor incremental en cada
              ciclo y facilitando una respuesta rápida a nuevas demandas de
              seguridad o integración de nuevos dispositivos IoT.
            </p>
          </section>

          {/* Sección de Fases del SDLC */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Fases del SDLC con el Enfoque Ágil
            </h2>

            {/* Subsección de Problema */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Problema (Análisis de Requerimientos)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La necesidad de contar con sistemas de monitoreo seguros,
              accesibles y configurables a nivel doméstico ha impulsado el
              desarrollo de soluciones IoT. A través de entrevistas con usuarios
              potenciales, se definieron las principales funcionalidades:
              monitoreo de cámaras en tiempo real, alertas automáticas por
              actividad sospechosa, control remoto de dispositivos de bloqueo y
              acceso a informes de actividad. También se documentaron requisitos
              no funcionales, como la confiabilidad de las alertas, la seguridad
              de la transmisión de datos, y la compatibilidad con una variedad
              de dispositivos IoT.
            </p>

            {/* Subsección de Idea o Boceto */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Idea o Boceto (Planificación)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La planificación inicial se enfocó en dividir el desarrollo en
              sprints o ciclos cortos, con tareas específicas como la
              configuración de conexiones seguras, la integración con
              dispositivos IoT, y el diseño de la interfaz de usuario para el
              monitoreo en tiempo real. Se identificaron riesgos, como la
              compatibilidad con distintos dispositivos y la protección de
              datos, y se definió un plan de contingencia para cada uno. El
              equipo también estableció métricas para evaluar el éxito de cada
              sprint, como la estabilidad de la transmisión de video y la
              precisión de las alertas de movimiento.
            </p>

            {/* Subsección de Planificación y Diseño */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Planificación y Diseño (Diseño del Sistema)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El diseño incluyó tanto la arquitectura general del sistema de
              monitoreo como los componentes específicos para cada
              funcionalidad. Se optó por un diseño modular con una arquitectura
              orientada a servicios (SOA), que permite la integración de
              distintos sensores y cámaras. Este diseño modular facilita la
              inclusión de nuevos dispositivos IoT y asegura una alta
              disponibilidad y seguridad en la comunicación de datos. La
              interfaz de usuario se diseñó para facilitar el acceso remoto
              desde dispositivos móviles y permitir la visualización en tiempo
              real de los datos.
            </p>

            {/* Subsección de Implementación o Desarrollo */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Implementación o Desarrollo
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Durante la implementación, el desarrollo de cada módulo se realizó
              en ciclos de iteración. Las primeras versiones incluyeron los
              módulos básicos de visualización en tiempo real y detección de
              movimiento, que se probaron y optimizaron antes de agregar nuevas
              funciones, como la automatización de bloqueos de puertas. Cada
              ciclo incluyó pruebas unitarias y de integración para asegurar el
              correcto funcionamiento de los dispositivos y de las alertas
              automáticas. La implementación también abarcó medidas de seguridad
              para proteger las transmisiones de video y los datos de usuario.
            </p>

            {/* Subsección de Pruebas y Estadísticas */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Pruebas y Estadísticas
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cada sprint finalizó con pruebas exhaustivas para validar el
              rendimiento y la seguridad del sistema, incluyendo pruebas de
              carga para verificar la transmisión de datos en tiempo real y
              pruebas de intrusión para comprobar la seguridad de las
              conexiones. Se realizaron pruebas funcionales de cada sensor y
              dispositivo conectado, asegurando que las alertas y la
              automatización respondieran a las condiciones reales. La
              retroalimentación obtenida en cada sprint ayudó a optimizar las
              funciones y a mejorar la precisión de las estadísticas del
              sistema, como la frecuencia de activación de las alertas y la
              estabilidad de la conexión en diferentes condiciones de red.
            </p>
          </section>

          {/* Sección de Conclusión de Despliegue y Mantenimiento */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Conclusión (Despliegue y Mantenimiento)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Una vez finalizado el desarrollo de las funciones principales, el
              sistema se implementó en un entorno controlado y se capacitó a los
              usuarios sobre el uso de la aplicación y sus funciones de
              monitoreo y automatización. El despliegue incluyó la configuración
              de servidores para la transmisión de datos y la optimización de la
              interfaz de usuario. Posteriormente, el sistema se mantuvo en
              constante actualización, añadiendo mejoras y nuevas
              funcionalidades para adaptarse a las necesidades de los usuarios.
            </p>
          </section>

          {/* Sección de Conclusión */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Conclusión
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              El uso del enfoque Ágil en el desarrollo del sistema de monitoreo
              doméstico IoT facilitó la entrega de una solución segura y
              adaptable que cumple con las necesidades de seguridad y comodidad
              del usuario. Gracias al enfoque iterativo, cada fase del ciclo de
              vida permitió mejoras continuas y la incorporación de dispositivos
              y funciones de monitoreo más avanzadas, resultando en un sistema
              de calidad que puede ajustarse a futuros avances en tecnología
              IoT.
            </p>
          </section>
          {/* Sección de Justificación de Modelo */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Justificación del Enfoque Ágil
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Debido a la constante innovación en dispositivos IoT, el enfoque
              Ágil permite responder a cambios y mejoras en la tecnología de
              sensores y cámaras, garantizando que el sistema esté preparado
              para futuras integraciones.
            </p>
          </section>
          {/* Sección de Viabilidad de Modelo */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Viabilidad del Enfoque Ágil
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La posibilidad de mantener el sistema en constante mejora facilita
              la integración de nuevos dispositivos IoT y permite que el sistema
              se ajuste a las actualizaciones tecnológicas, garantizando que el
              sistema se mantenga relevante y seguro en el tiempo.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
