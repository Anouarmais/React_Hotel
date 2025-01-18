const Telefono = ({ value}) => {
    return (
      <div >
        <label htmlFor="Telefono" >
          Telefono:
        </label>
        <input
          type="number"
          id="Telefono"
          name="Telefono"
          value={value}
          placeholder="Escribe tu Telefono"
          minLength={8}
          maxLength={15}
          required
       
        />
      </div>
    );
  };
  
  export default Telefono;
  