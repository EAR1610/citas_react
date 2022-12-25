/**
 * ESTE COMPONENTE SE ENCARGA DE CREAR EL FORMULARIO DE LA APP
 * SE CREAN DIFERENTES USESTATE PARA LOS CAMPOS DEL FORMULARIO
 * SE AGREGAN VALIDACIONES AL OBJETO MEDIANTE EL HOOK USEEFFECT
 * SE TIENE UNA FUNCION QUE GENERA UN ID UNICO PARA SOLUCIONAR LA ADVERTENCIA DE REACT
 * ESTE COMPONENTE RECIBE VARIOS PROPS
 */

import { useState, useEffect } from 'react';
import Alerta from './Alerta';
import Error from './Error';


const Formulario = ({ patients, setPatients, patient, setPatient }) => {

  /* REGRESE LA FECHA ACTUAL EN FORMATO YYYY/MM/DD */
  const minDay = new Date().toISOString().slice(0, 10);

  const [name, setName] = useState(''); 
  const [owner, setOwner] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [date, setDate] = useState(''); 
  const [symptoms, setSymptoms] = useState(''); 

  /* PARA VALIDAR SI EXISTE UN ERROR */
  const [error, setError] = useState(false);

  /* PACIENTE PARA ACTUALIZAR */ 
  useEffect(() => {
    if( Object.keys(patient).length > 0 ){
      const { name, owner, email, date, symptoms } = patient;

      setName(name);
      setOwner(owner);
      setEmail(email);
      setDate(date);
      setSymptoms(symptoms);
    }
  }, [patient])
  

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const cleanObject = () => {
    setName('');
    setOwner('')
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    
    //Validando el formulario
    if( [ name, owner, email, date, symptoms ].includes('') ){
      setError(true);
      return;
    } 

    setError(false);

    const newPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptoms      
    }

    if( patient.id ){
      //Editando el Registro
      newPatient.id = patient.id;

      const updatedPatients = patients.map( patientState => 
        patientState.id === patient.id 
          ? newPatient 
          : patientState
        );

      const inputDate = document.querySelector('.alta');
      inputDate.disabled = true;

      setPatients(updatedPatients);
      setPatient({});

      Alerta('success', 'La cita se ha actualizado correctamente');
      
    } else {
      //Nuevo Registro
      newPatient.id = generateId();
      setPatients([ ...patients, newPatient ])

      Alerta('success', 'La cita se ha registrado correctamente');
    }

    //Reiniciar el objeto
    cleanObject();
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        >
          { error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota:
          </label>
          <input
            id="mascota" 
            type='text'
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ name }
            onChange={ e => setName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario:
          </label>
          <input
            id="owner" 
            type='text'
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ owner }
            onChange={ e => setOwner(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email:
          </label>
          <input
            id="email" 
            type='email'
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Fecha Alta:
          </label>
          <input
            id="alta" 
            type='date'
            min={minDay}
            className="alta border-2 w-full p-2 mt-2 rounded-md"
            value={ date }
            onChange={ e => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Síntomas:
          </label>
          <textarea 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Escribe los síntomas"
            value={ symptoms }
            onChange={ e => setSymptoms(e.target.value) }
           />
        </div>

        <input 
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 cursor-pointer transition-colors'
          value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Formulario