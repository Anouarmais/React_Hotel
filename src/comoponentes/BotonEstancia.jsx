const BotonEstancia = ({ fechaEntrada, fechaSalida }) => {
    const fechaInicio = new Date(fechaEntrada);
    const fechaFin = new Date(fechaSalida);
  
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      return (
        <div>
          <button type="button" disabled>
            Calcular Estancia
          </button>
          <p>Por favor, ingrese fechas válidas.</p>
        </div>
      );
    }
  
    
    if (fechaFin <= fechaInicio) {
      return (
        <div>
          <button type="button" disabled>
            Calcular Estancia
          </button>
          <p>La fecha de salida debe ser posterior a la fecha de entrada.</p>
        </div>
      );
    }
  
    const diff = fechaFin.getTime() - fechaInicio.getTime();
  
    return (
      <div>
        <button type="button">Calcular Estancia</button>
        <p>Estancia calculada: {diff / (1000 * 60 * 60 * 24)} días</p>
      </div>
    );
  };
  
  export default BotonEstancia;
  