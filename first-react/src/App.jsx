import { useState, useEffect, use } from 'react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Cargando...");

  {/*useeffect para cargar datos pagina principal */}
  useEffect(() => {
    console.log("useEffect ejecutado");
    setTimeout(() => {
      setMessage("¡Bienvenido a mi tienda React!");
    }, 2000);
  } , []);


  {/*useeffect para actualizar el contador */}
  useEffect(() => {
    console.log(`el contandor se actualizó a: ${count}`);
  } , [count]);



  const incrementar = () => {
    setCount(count + 1);
  };

  const incrementar10 = () => {
    setCount(count + 10);
  };

  const decrementar = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  const resetear = () => {
    setCount(0);
  };

  const getcolor = () => {
    if(count <= 5) {
      return "text-cyan-400";
    }
    if (count <=15) {
      return "text-yellow-400";
    }
    return "text-green-400";
  };

  {/*const handleClick = () => {
    alert('Button clicked!');
  };*/}

  return (
    <div className="min h screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 clasName="text-5xl font-bold text-senter mb-8 text-cyan-400">
          Mi Tienda React
        </h1>

        <div className={`text-4xl font-bold mb-6 ${getcolor()}`}>
          {message}
        </div>

        {/* Contador*/ }
        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-10 text-center mb-12">
          <h2 className="text-3xl mb-6">Contador useState</h2>

          <div className={`text-8xl font-bold mb-6 transition-colors ${getcolor()}`}>
            {count} 
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={decrementar}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-2xl text-xl font-medium transition-all"
            >
              - 1
            </button>

            <button 
              onClick={incrementar}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-2xl text-xl font-medium transition-all"
            >
              + 1
            </button>

            <button
              onClick={incrementar10}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl text-xl font-medium transition-all"
            >
              + 10
            </button>

            <button
              onClick={resetear}
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 rounded-2xl text-xl font-medium transition-all"
            >
              Resetear
            </button>
          </div>
        </div>
    
        {/*<div className="flex flex-col items-center gap-6"> 
          <h2 className ="text-2xl mb-4">Probando Componentes y Props</h2>

          <Button text="Botón Normal" color="blue" onClick={handleClick}/>
          <Button text="Botón Rojo" color="red" onClick={handleClick}/>
          <Button text="Botón Verde" color="green" onClick={handleClick}/>
        </div>*/}

        {/* Tarjetas */}

      <h2 className="text-3xl font-bold text-center mb-8">Nuestros productos</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <Card
            title="Laptop Gamer"
            description="Procesador Ryzen 7, 16GB RAM, SSD 512GB, Tarjeta Gráfica RTX 3060"
            price={1200.99}
          />

          <Card
            title="Smartphone Pro"
            description="Pantalla AMOLED, 128GB Almacenamiento, Cámara de 108MP, Batería de 5000mAh"
            price={899.99}
          />

          <Card
            title="Auriculares Inalámbricos"
            description="Cancelación de Ruido Activa, Hasta 30 horas de reproducción, Carga rápida"
            price={199.99}
          />

        </div>
      </div>
    </div>

  );
}

export default App
