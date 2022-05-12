import './App.css';
import { useFormik} from 'formik'


function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values => {
      alert(JSON.stringify("Login Successful",null, 2));
    },
    validate: values =>{
      let errors = {};
      if(!values.password) errors.password = 'Field Required';
      if(!values.email) {
        errors.email = 'Field Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      return errors;
    }
  });
  return (
    <div>
      <p>
        Sample Form using React App and Formik. 
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input 
          id="emailField" 
          name="email"
          type="email"  
          placeholder='Jane@Doe.com'
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input 
          id="pswField" 
          name="password"
          type="password"  
          placeholder='Enter Your Password'
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.password}
          /><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button 
          id="submitBtn" 
          type="submit">Submit
        </button>
      </form>    
    </div>
  );
}

export default App;
