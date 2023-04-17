import React,{useState} from 'react'

export const HomeViewModel = () => {
    //de esta manera se trabajan los view models con objetos en vez de crear un use state por cada campo

      const [values, setValues] = useState({
        email:'',
        password:'',
      });
      const OnChange=(property:string,value:any)=>{
        setValues({...values,[property]:value}); //de esta manera desestructuramos los valores en vez de poner values.email o values 

      }
      return{
        ...values,
        OnChange
      }
  
}
export default HomeViewModel //pasamos el home view model
