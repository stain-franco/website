import Navbar from "./Navbar";
import React from "react";

const ConceptosGenerales = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 text-center">
            Conceptos Generales
          </h1>

          {/* Sección de Análisis de Requerimientos */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Análisis de Requerimientos
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Requisitos Funcionales:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                Reproducción de música: Permitir la reproducción de canciones,
                álbumes y listas de reproducción en diferentes formatos de
                audio.
              </li>
              <li>
                Creación de listas de reproducción: Facilitar la creación y
                personalización de listas de reproducción por parte del usuario.
              </li>
              <li>
                Descubrimiento de música: Ofrecer recomendaciones personalizadas
                basadas en los gustos del usuario.
              </li>
              <li>
                Gestión de cuenta: Permitir la creación de cuentas, la gestión
                de perfiles y suscripciones.
              </li>
              <li>
                Integración con redes sociales: Facilitar la conexión con otras
                plataformas para compartir música y seguir a amigos.
              </li>
            </ul>

            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Requisitos No Funcionales:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                Alta disponibilidad: La aplicación debe estar disponible en todo
                momento para garantizar una experiencia de usuario fluida.
              </li>
              <li>
                Rendimiento: La aplicación debe responder rápidamente a las
                acciones del usuario y evitar retrasos en la reproducción de
                música.
              </li>
              <li>
                Seguridad: La aplicación debe proteger los datos del usuario y
                garantizar la privacidad de su información.
              </li>
              <li>
                Usabilidad: La interfaz de usuario debe ser intuitiva y fácil de
                navegar.
              </li>
              <li>
                Escalabilidad: La aplicación debe ser capaz de soportar un gran
                número de usuarios concurrentes y un catálogo de música en
                constante crecimiento.
              </li>
            </ul>
          </section>

          {/* Sección de Planificación */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Planificación
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Factores Clave
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Tamaño del equipo:</strong> Se requiere un equipo
              multidisciplinario con experiencia en desarrollo móvil, diseño de
              UX/UI, backend y DevOps
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Tecnologías:</strong> Selección de tecnologías y
              frameworks adecuados para el desarrollo de la aplicación (por
              ejemplo, React Native, Node.js, MongoDB).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Presupuesto:</strong> Asignación de recursos financieros
              para cubrir los costos de desarrollo, infraestructura, marketing y
              mantenimiento.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Cronograma:</strong> Establecimiento de un calendario
              realista para el desarrollo y lanzamiento de la aplicación,
              considerando hitos clave como el desarrollo de prototipos, pruebas
              y lanzamiento.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Riesgos:</strong> Identificación de posibles riesgos como
              retrasos en el desarrollo, cambios en los requisitos, problemas de
              compatibilidad con diferentes dispositivos, y competencia en el
              mercado
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Gestión de riesgos:</strong> Se implementan estrategias
              como la gestión ágil del proyecto, la realización de revisiones
              periódicas del progreso, y la creación de planes de contingencia
              para mitigar los riesgos identificados.
            </p>
          </section>

          {/* Sección de Diseño del Sistema */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Diseño del Sistema
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Estructura
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Arquitectura de microservicios:</strong> Dividir la
              aplicación en pequeños servicios independientes para facilitar el
              desarrollo, el mantenimiento y la escalabilidad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Base de datos:</strong> Utilizar una base de datos NoSQL
              como MongoDB para almacenar grandes volúmenes de datos de forma
              flexible y escalable
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>API:</strong> Exponer una API RESTful para permitir la
              integración con otras aplicaciones y servicios
            </p>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Beneficios del diseño
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Flexibilidad:</strong> Facilita la adición de nuevas
              funcionalidades y la modificación de las existentes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Escalabilidad:</strong> Permite escalar cada servicio de
              forma independiente según las necesidades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Reutilización de código:</strong> Fomenta la reutilización
              de componentes y la reducción de la duplicación de código.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Mantenibilidad:</strong> Hace que el código sea más fácil
              de entender y mantener.
            </p>
          </section>

          {/* Sección de Pruebas */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Pruebas
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
              Tipos de pruebas
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas unitarias:</strong> Verificar el correcto funcionamiento de cada módulo de código.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas de integración:</strong> Asegurar que los diferentes componentes de la aplicación
              interactúen correctamente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas funcionales:</strong> Verificar que la aplicación cumple con los requisitos
              funcionales definidos
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas de rendimiento:</strong> Evaluar la velocidad, la capacidad de respuesta y la
              estabilidad de la aplicación bajo diferentes cargas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas de usabilidad:</strong> Evaluar la facilidad de uso de la interfaz de usuario.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pruebas de aceptación:</strong> Verificar que la aplicación cumple con las expectativas del
              usuario.
            </p>
          </section>

          {/* Sección de Mantenimiento y Soporte */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Mantenimiento y Soporte
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
            Importancia
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Corrección de errores:</strong> Identificar y solucionar errores que puedan surgir después
              del lanzamiento de la aplicación
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Nuevas funcionalidades:</strong> Agregar nuevas características para mejorar la experiencia
              del usuario y mantener la aplicación competitiva.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Adaptación a cambios:</strong> Adaptar la aplicación a los cambios en el entorno
              tecnológico y las necesidades del usuario.
            </p>
            <p className="text-2xl font-bold text-gray-800 leading-relaxed mb-4">
             Actualizaciones
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Nuevas plataformas:</strong> Extender la aplicación a nuevas plataformas móviles (por
                ejemplo, wearables).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Integración con nuevos servicios:</strong> Integrar la aplicación con otros servicios como
              asistentes virtuales o dispositivos inteligentes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Mejoras en la recomendación de música:</strong> Mejorar los algoritmos de recomendación
              para ofrecer una experiencia más personalizada.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ConceptosGenerales;
