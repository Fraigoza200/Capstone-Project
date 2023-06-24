import { useState } from 'react';
import './Form.css';
import Forminput from './Forminput';

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    fullname: '',
    email: '',
    date: '',
    password: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
    },
    {
      id: 2,
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
      label: 'Full Name',
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 4,
      name: 'date',
      type: 'text',
      placeholder: 'Date',
      label: 'Date',
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div className="form-section">
      <div className="left-section">
        <img src="" alt="" />
      </div>
      <div className="right-section">
        <form action="" className="form" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
