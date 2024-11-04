import React from "react";
import Image from "next/image";

const Inicio = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
          Inicio
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La arquitectura de software es un aspecto fundamental en el desarrollo
          de sistemas informáticos, ya que establece las bases sobre las cuales
          se construyen y operan las aplicaciones. A medida que los sistemas se
          vuelven más complejos, la necesidad de una buena arquitectura se
          vuelve crítica para asegurar que todos los componentes del software
          funcionen de manera coherente y eficiente.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          En este contexto, se exploran conceptos clave como la definición de la
          arquitectura, los componentes que la integran, y la importancia de los
          requisitos no funcionales y la documentación. Cada uno de estos
          elementos juega un papel vital en el éxito a largo plazo de un
          sistema.
        </p>

        {/* Sección de Componentes */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Componentes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los componentes son las piezas fundamentales que componen un sistema
            de software. Cada componente tiene una tarea específica que realiza
            dentro del sistema, y todos juntos trabajan de manera coordinada
            para ofrecer la funcionalidad total del software.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Interfaz de Usuario (UI):</strong> Es la parte visual e
              interactiva que permite a los usuarios interactuar con el sistema.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Interfaz_de_usuario"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Aprender más sobre UI
              </a>
              .
            </li>
            <li>
              <strong>Lógica de Negocio:</strong> Maneja todas las reglas y
              procesos que permiten que el sistema tome decisiones y procese
              información.{" "}
              <a
                href="https://es.wikipedia.org/wiki/L%C3%B3gica_de_negocio"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Aprender más sobre lógica de negocio
              </a>
              .
            </li>
            <li>
              <strong>Acceso a Bases de Datos:</strong> Gestiona la interacción
              con la base de datos, incluyendo la lectura y escritura de datos.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Base_de_datos"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre bases de datos
              </a>
              .
            </li>
          </ul>
          <Image
            src="/img/componentes.png"
            alt="Diagrama de Componentes del Software"
            width={240}
            height={240}
            className="rounded-lg shadow-md mx-auto"
          />
        </section>

        {/* Sección de Conexiones */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Conexiones
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Las conexiones definen cómo se comunican los componentes dentro del
            sistema. Esta comunicación puede darse a través de interfaces,
            protocolos de comunicación o flujos de datos.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Interfaces:</strong> Permiten la comunicación entre
              componentes definiendo qué información se intercambia y cómo.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre interfaces
              </a>
              .
            </li>
            <li>
              <strong>Protocolos de Comunicación:</strong> Aseguran que los
              mensajes entre componentes sean entendidos de manera uniforme.
            </li>
            <li>
              <strong>Flujos de Datos:</strong> Describen cómo los datos se
              mueven y son procesados dentro del sistema.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Flujo_de_datos"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre flujos de datos
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Sección de Patrones de Diseño */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Patrones de Diseño
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los patrones de diseño son soluciones comunes que ayudan a resolver
            problemas típicos en la construcción de software.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>MVC (Modelo-Vista-Controlador):</strong> Separa la lógica
              de negocio, los datos y la presentación.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Aprender más sobre MVC
              </a>
              .
            </li>
            <li>
              <strong>Capas:</strong> Divide el sistema en niveles como
              presentación, lógica de negocio y acceso a datos.
            </li>
            <li>
              <strong>Microservicios:</strong> Cada parte del sistema es un
              servicio independiente que se comunica a través de APIs.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Microservicios"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre microservicios
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Sección de Estilos Arquitectónicos */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Estilos Arquitectónicos
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            El estilo arquitectónico es el enfoque general que sigue el diseño
            del software.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Arquitectura de Tres Capas:</strong> Divide el sistema en
              presentación, lógica de negocio y acceso a datos.
            </li>
            <li>
              <strong>SOA (Arquitectura Orientada a Servicios):</strong> Los
              servicios son componentes independientes reutilizables en
              diferentes aplicaciones.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Arquitectura_orientada_a_servicios"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre SOA
              </a>
              .
            </li>
          </ul>
          <Image
            src="/img/tres capas.png"
            alt="Diagrama de Arquitectura de Tres Capas"
            width={600}
            height={240}
            className="rounded-lg shadow-md mx-auto"
          />
        </section>

        {/* Sección de Requisitos No Funcionales */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Requisitos No Funcionales
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Los requisitos no funcionales determinan la calidad del sistema más
            allá de sus funcionalidades básicas.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Rendimiento:</strong> Qué tan rápido responde el sistema.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Rendimiento_de_software"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Aprender más sobre rendimiento de software
              </a>
              .
            </li>
            <li>
              <strong>Escalabilidad:</strong> Capacidad del sistema para manejar
              una carga de trabajo creciente.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Escalabilidad"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre escalabilidad
              </a>
              .
            </li>
            <li>
              <strong>Seguridad:</strong> Protección de datos y sistemas contra
              accesos no autorizados y vulnerabilidades.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Aprender más sobre seguridad informática
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Sección de Tecnologías y Herramientas */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Tecnologías y Herramientas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Las tecnologías y herramientas seleccionadas son cruciales para el
            desarrollo y mantenimiento efectivo del sistema. Algunas de las
            más comunes incluyen:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Lenguajes de Programación:</strong> Utilizados para
              implementar la lógica del sistema, como JavaScript, Python o Java.
            </li>
            <li>
              <strong>Frameworks:</strong> Herramientas que facilitan el
              desarrollo, como React para interfaces o Node.js para el backend.{" "}
              <a
                href="https://es.wikipedia.org/wiki/Framework"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Más sobre Frameworks
              </a>
            </li>
            <li>
              <strong>Sistemas de Control de Versiones:</strong> Como Git, que
              permite el seguimiento de cambios y colaboración entre
              desarrolladores.
            </li>
          </ul>
          <Image
            src="/img/UML.png"
            alt="Diagrama de Arquitectura de Tres Capas"
            width={400}
            height={240}
            className="rounded-lg shadow-md mx-auto"
          />
        </section>

        {/* Sección de Documentación */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Documentación
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La documentación es esencial para mantener la comprensión del
            sistema y facilitar su desarrollo futuro. Incluye descripciones de
            la arquitectura, patrones de diseño utilizados, y guías para
            desarrolladores.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Documentación Técnica:</strong> Instrucciones sobre la
              implementación y mantenimiento del sistema.
            </li>
            <li>
              <strong>Manual del Usuario:</strong> Guía para los usuarios sobre
              cómo utilizar el sistema.
            </li>
          </ul>
        </section>


        {/* Sección de Evolución y Mantenimiento */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Evolución y Mantenimiento
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La evolución y mantenimiento de un sistema son aspectos clave para
            su sostenibilidad a largo plazo. Esto incluye:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              <strong>Actualizaciones:</strong> Implementación de nuevas
              funcionalidades y mejoras basadas en las necesidades de los
              usuarios.
            </li>
            <li>
              <strong>Corrección de Errores:</strong> Identificación y solución
              de problemas para mantener la funcionalidad y seguridad del
              sistema.
            </li>
            <li>
              <strong>Monitoreo:</strong> Evaluación continua del rendimiento
              del sistema para asegurar su efectividad y adaptabilidad.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Inicio;
