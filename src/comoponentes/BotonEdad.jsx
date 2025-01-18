import { useState } from 'react';

const BotonEdad = ({ fechaNacimiento }) => {
  const [edad, setEdad] = useState(null); 

  const calcularEdad = () => {
    if (!fechaNacimiento) {
      alert('Por favor, ingrese una fecha de nacimiento.');
      return;
    }

    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();

    let edadCalculada = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    

    

    setEdad(edadCalculada);  
  };

  return (
    <div>
      <button type="button" onClick={calcularEdad}>Calcular Edad</button>
      {edad !== null && <p>Edad calculada: {edad}</p>}  
    </div>
  );
};

export default BotonEdad;
