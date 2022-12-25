/**
 * ESTE COMPONENTE SE ENCARGA DE MOSTRAR LOS PACIENTES DE LA APP
 * PARA ELLO PIDE 3 PROPS
 * SE INVOCA EL COMPONENTE DE PACIENTE
 */

import { Fragment, useState } from "react"
import Alerta from "./Alerta";
import Paciente from "./Paciente"

const ListadoPaciente = ({ patients, setPatient, deletePatient }) => {

  const [patientToFind, setPatientToFind] = useState('');
  const [foundPatient, setFoundPatient] = useState({});  

  const findPatient = () => {
    const patientUser = patients.filter( patient => patient.name == patientToFind );
    if(patientUser.length){
      setFoundPatient(patientUser);      
    } else {
      Alerta('warning', 'No hay una cita con los datos especificados');
    }
  }

  const showAllPatients = () => {
    patientToFind.includes('') && setFoundPatient({});
  }
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { patients && patients.length ? (
        <Fragment>
          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Buscar</label>
              <div className="flex items-stretch w-full">
                <input
                  id="name"
                  type="search"
                  value={ patientToFind }
                  onChange={ e => setPatientToFind( e.target.value )}
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                  placeholder="Escribe el nombre del Paciente"
                />
                <button 
                  className="btn mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 
                  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
                  type="button" 
                  onClick={ findPatient }
                  >
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
                <button 
                  className="btn mx-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 
                  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" 
                  type="button" 
                  onClick={ showAllPatients }
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                </button>
              </div>
            </div>
          </div>

          { foundPatient && foundPatient.length ?
              foundPatient.map( patient => (
                <Paciente
                  key={ patient.id } 
                  patient={ patient }
                  setPatient={ setPatient }
                  deletePatient={ deletePatient }
                />
              ))
            :
              patients.map( patient => (
                <Paciente
                  key={ patient.id } 
                  patient={ patient }
                  setPatient={ setPatient }
                  deletePatient={ deletePatient }
                />
              )) 
          }

        </Fragment>
        ) : (
          <Fragment> 
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando tus pacientes {''}
              <span className="text-indigo-600 font-bold">Y aparecerán en este lugar</span>
            </p>
          </Fragment>
        ) 
      }
      
    </div>
  )
}

export default ListadoPaciente