import React from 'react';

const Courses = () => {
    const courses = [
      { id: 1, title: "Curso de Meditación", description: "Aprende técnicas avanzadas de meditación.", image: "url-to-image.jpg" },
      { id: 2, title: "Curso de Yoga", description: "Mejora tu salud física y mental a través del yoga.", image: "url-to-image.jpg" },
    ];
  
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Nuestros Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(course => (
            <div key={course.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{course.title}</h2>
                <p className="mt-2 text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Courses;
