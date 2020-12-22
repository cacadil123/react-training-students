import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './App.css';


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(4, 'Min value should be greater than 6').max(12, 'Not more than 12'),
  age: yup.string().matches(/^\d*$/,'its should be number').required('age is required')
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  return (
   <>
    <form style={{ margin: '200px'}} onSubmit={handleSubmit(d => console.log(d))}>
      <h1>Login Form</h1>
        <input type="email" placeholder="Enter Email" name="email" ref={register} />
  {errors && errors.email && <span style={{ color: 'red'}}>{errors.email.message}</span>}
       
        <input type="password" placeholder="Enter password" name="password" ref={register} />
  {errors && errors.password && <span style={{ color: 'red'}}>{(errors.password.message)}</span>}

  Age: <input type="text" name="age" ref={register}  />
  {errors && errors.age && <span style={{ color: 'red'}}>{(errors.age.message)}</span>}
      {console.log('eeeee',errors.age)}
        <input type="submit" value="Submit" />
      </form> 
   </>
  );
}

export default App;
