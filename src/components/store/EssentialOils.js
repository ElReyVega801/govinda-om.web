import React from 'react';

const EssentialOils = () => {
  const oils = [
    "Abeto Negro", "Abeto Siberiano", "Albahaca", "Árbol de Té", "Árbol de Té Touch", 
    "Arborvitae (Árbol de la vida)", "Baya de Enebro", "Bergamota", "Birch (Abedul)", 
    "Blue Lotus Touch", "Blue Tansy (Tansy Azul)", "Cananga", "Canela", "Cardamomo", 
    "Casia", "Cedro", "Cilantro", "Ciprés", "Citronela", "Clavo", "Clementina", 
    "Copaiba", "Copaiba Touch", "Cúrcuma", "Davana Touch", "Eucalipto Limón", 
    "Gaulteria", "Geranio", "Guaiacwood", "Helicriso", "Helicriso Touch", "Hierbabuena", 
    "Hinojo", "Hinoki", "Hoja de laurel", "Incienso", "Incienso Touch", "Jazmín", 
    "Jazmín Touch", "Jengibre", "Lavanda", "Lavanda Touch", "Lima", "Limón", 
    "Limoncillo", "Magnolia Touch", "Mandarina", "Mandarina Verde", "Manzanilla Romana", 
    "Mejorana", "Melissa", "Menta", "Menta Touch", "Mirra", "Mirra Touch", 
    "Naranja Silvestre", "Nardo", "Neroli Touch", "Niaouli", "Orégano", "Orégano Touch", 
    "Osmanthus Touch", "Pachulí", "Palmarosa", "Perlas de Menta", "Perlas MightyMint®", 
    "Petitgrain (Naranjo amargo)", "Pimienta Negra", "Pimienta Rosa", "Ravintsara", 
    "Romero", "Rosa", "Rosa Touch", "Salvia", "Salvia Española", "Sándalo", 
    "Sándalo Hawaiano", "Satureja / Summer Savory", "Semilla de Apio", 
    "Semilla de Cilantro", "Tomillo", "Toronja", "Tulsi", "Vainilla de Madagascar", 
    "Vetiver", "Vetiver Touch", "Yarrom POM (Botanical Duo)", "Ylang Ylang"
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center">Aceites Esenciales</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {oils.map((oil, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{oil}</h2>
            <p className="mt-2">Precio: A determinar</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialOils;