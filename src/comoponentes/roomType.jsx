const SelectRoom = ({ label, name, value, options, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={value} onChange={onChange}>
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectRoom;
  