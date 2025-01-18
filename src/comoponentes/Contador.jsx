import { useState, useEffect } from 'react';

const ContadorEstancia = ({ fechaEntrada, fechaSalida, precioHabitacion ,servicios }) => {
  const [numeroNoches, setNumeroNoches] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    if (fechaEntrada && fechaSalida) {
      const fechaInicio = new Date(fechaEntrada);
      const fechaFin = new Date(fechaSalida);
 
      if (fechaFin > fechaInicio) {
        const diferenciaTiempo = fechaFin - fechaInicio;
        const noches = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24)); 
        setNumeroNoches(noches);
        setPrecioTotal((noches * precioHabitacion) + servicios);
      } else {
        setNumeroNoches(0);
        setPrecioTotal(0);
      }
    }
  }, [fechaEntrada, fechaSalida, precioHabitacion]);

  return (
    <div>
      {numeroNoches > 0 && (
        <>
          <p>
            Estancia: {numeroNoches} noches <br />
            Total a pagar con extras: ${precioTotal}
          </p>
        </>
      )}
      



      {numeroNoches === 0 && <p>Primero ha de ingresar la fecha de estancia.</p>}
    </div>
  );
};

export default ContadorEstancia;
