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
      errorMessage: "Username should contain 3-17 characters",
      label: 'Username',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
      errorMessage: "Name field is Required",
      label: 'Full Name',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: "Type in valid Email",
      label: 'Email',
      required: true,
    },
    {
      id: 4,
      name: 'date',
      type: 'date',
      placeholder: 'Date',
      errorMessage: "",
      label: 'Date',
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: "Password should be 6-20 characters",
      label: 'Password',
      pattern: "^[A-Za-z0-9]{6,20}$",
      required: true,
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
          <h1>Reserve a Table</h1>
          {inputs.map((input) => (
            <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button className='button'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
