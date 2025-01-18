const InputFecha = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" value={value} onChange={onChange} />
    </div>
  );
};

export { InputFecha as FechaNacimiento, InputFecha as FechaEntrada , InputFecha as FechaSalida };
