const NombreInput = ({ value, onChange }) => {
  return (
    <div >
      <label htmlFor="nombre" >
        Nombre:
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={value}
        onChange={onChange}
        placeholder="Escribe tu nombre"
        minLength={2}
        required
     
      />
    </div>
  );
};

export default NombreInput;
