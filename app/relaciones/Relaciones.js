import React from "react";
import Navbar from "../Navbar"; // Asegúrate de que la ruta sea correcta

const Relaciones = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Relaciones entre Arquitectura de Datos, Ciencia, Técnica y Tecnología
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La arquitectura de datos es fundamental en la organización, integración y gobernanza de la información dentro de un sistema. Su relación con la ciencia, la técnica y la tecnología se hace evidente en el desarrollo y aplicación de principios, métodos y herramientas para almacenar, procesar y gestionar datos eficientemente.
          </p>

          {/* Sección de Ciencia */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Ciencia
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La ciencia aporta un enfoque metodológico a la arquitectura de datos, permitiendo el análisis y comprensión de grandes volúmenes de datos a través de modelos matemáticos y estadísticos. El conocimiento científico es fundamental para la precisión en el diseño de arquitecturas orientadas a la toma de decisiones.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Análisis de datos:</strong> Permite el entendimiento profundo de los patrones y tendencias en la información.
              </li>
              <li>
                <strong>Modelado:</strong> Creación de modelos de datos con bases científicas para mejorar la representación de la realidad.
              </li>
            </ul>
          </section>

          {/* Sección de Técnica */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Técnica
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La técnica en arquitectura de datos incluye los métodos específicos para el diseño, construcción y mantenimiento de estructuras de datos, optimizando el acceso y manipulación de la información. El uso de técnicas precisas permite que los datos sean fácilmente recuperables y gestionables.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Normalización de datos:</strong> Establece una estructura coherente y evita redundancias en el sistema.
              </li>
              <li>
                <strong>Optimización de consultas:</strong> Mejora la eficiencia en el acceso a la información.
              </li>
            </ul>
          </section>

          {/* Sección de Tecnología */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
              Tecnología
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La tecnología proporciona las herramientas y plataformas necesarias para implementar arquitecturas de datos robustas. Bases de datos relacionales y no relacionales, lenguajes de programación y entornos de almacenamiento en la nube son fundamentales en el diseño de una arquitectura de datos efectiva y escalable.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li>
                <strong>Lenguajes de consulta:</strong> Como SQL y NoSQL, esenciales para el manejo y manipulación de datos.
              </li>
              <li>
                <strong>Infraestructura en la nube:</strong> Servicios que facilitan el almacenamiento y procesamiento de grandes volúmenes de datos.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Relaciones;
