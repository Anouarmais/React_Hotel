import { useState } from 'react';
import { FechaNacimiento, FechaEntrada, FechaSalida } from './InputFecha'; 
import BotonEdad from './BotonEdad'; 
import Telefono from './Telefono';  
import NombreInput from './Nombre';
import ServiciosAdicionales from './checkextras';
import SelectRoom from './roomType';
import ContadorEstancia from './Contador'; 

const FormularioReserva = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('');
  const [precioHabitacion, setPrecioHabitacion] = useState(0);

  const [totalEstancia, setTotalEstancia] = useState(0);
  const [totalServicios, setTotalServicios] = useState(0);

  const totalPagar = totalEstancia + totalServicios;

  const manejarCambio = (event) => {
    setFechaNacimiento(event.target.value);  
  };

  const manejarCambioEntrada = (event) => {
    setFechaEntrada(event.target.value);  
  };

  const manejarCambioSalida = (event) => {
    setFechaSalida(event.target.value);  
  };

  const manejarCambioHabitacion = (event) => {
    const selectedOption = event.target.value;
    setTipoHabitacion(selectedOption);

    const precio = options.find(option => option.id === parseInt(selectedOption))?.precio || 0;
    setPrecioHabitacion(precio);
  };

  const options = [
    {id: 4, name: "Ninguna", precio: 0}, 
    {id: 1, name: "Individual", precio: 10}, 
    {id: 2, name: "Doble", precio: 20}, 
    {id: 3, name: "Suite", precio: 30}
  ];

  return (
    <form>
      <NombreInput />
      <Telefono />
      <FechaNacimiento label={"Fecha de nacimiento:"} value={fechaNacimiento} onChange={manejarCambio} />
      <BotonEdad fechaNacimiento={fechaNacimiento} />
      <FechaEntrada label={"Fecha Entrada:"} value={fechaEntrada} onChange={manejarCambioEntrada} />
      <FechaSalida label={"Fecha Salida:"} value={fechaSalida} onChange={manejarCambioSalida} />

      <ServiciosAdicionales setTotalServicios={setTotalServicios} />
      <div>
        <p>Total de servicios adicionales: ${totalServicios}</p>
    
      </div>
    
      <SelectRoom 
        label={"Tipo de habitación"} 
        name={"room"}  
        value={tipoHabitacion} 
        onChange={manejarCambioHabitacion} 
        options={options}
      />
      
      <ContadorEstancia 
        fechaEntrada={fechaEntrada} 
        fechaSalida={fechaSalida} 
        precioHabitacion={precioHabitacion} 
        servicios={totalServicios} 
      />

    
    </form>
  );
};

export default FormularioReserva;
