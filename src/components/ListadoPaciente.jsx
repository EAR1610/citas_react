/**
 * ESTE COMPONENTE SE ENCARGA DE MOSTRAR LOS PACIENTES DE LA APP
 * PARA ELLO PIDE 3 PROPS
 * SE INVOCA EL COMPONENTE DE PACIENTE
 */

import { Fragment } from "react"
import Paciente from "./Paciente"

const ListadoPaciente = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { patients && patients.length ? (
        <Fragment>
          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          { patients.map( patient => (
            <Paciente
              key={ patient.id } 
              patient={ patient }
              setPatient={ setPatient }
              deletePatient={ deletePatient }
            />
            ) ) 
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