import React, { useState, useEffect } from 'react';

const ServiciosAdicionales = ({ setTotalServicios }) => {
  const [desayuno, setDesayuno] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [piscina, setPiscina] = useState(false);

  const calcularFactura = () => {
    let total = 0;
    if (desayuno) total += 7.5;
    if (wifi) total += 7.5;
    if (piscina) total += 7.5;
    return total;
  };

  useEffect(() => {
    const total = calcularFactura();
    setTotalServicios(total);
  }, [desayuno, wifi, piscina, setTotalServicios]);

  const manejarCambio = (evento) => {
    const { name, checked } = evento.target;
    if (name === 'desayuno') setDesayuno(checked);
    if (name === 'wifi') setWifi(checked);
    if (name === 'piscina') setPiscina(checked);
  };

  return (
    <div>
      <h2>Servicios Adicionales</h2>
      <div>
        <label>
          <input type="checkbox" name="desayuno" checked={desayuno} onChange={manejarCambio} />
          Desayuno (Añadir 7.5 a la factura)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="wifi" checked={wifi} onChange={manejarCambio} />
          WiFi (Añadir 7.5 a la factura)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="piscina" checked={piscina} onChange={manejarCambio} />
          Piscina (Añadir 7.5 a la factura)
        </label>
      </div>
    </div>
  );
};

export default ServiciosAdicionales;
