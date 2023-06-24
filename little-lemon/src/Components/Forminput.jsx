import './Forminput.css';

const Forminput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="forminput">
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  );
};

export default Forminput;
