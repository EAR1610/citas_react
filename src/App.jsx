import { useEffect, useState } from 'react'
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente  from "./components/ListadoPaciente";

function App() {

  const patientsLS = JSON.parse( localStorage.getItem('patients') ) ?? [];
  const [patients, setPatients] = useState(patientsLS);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ));
  }, [patients])
  
  const deletePatient = id => {
    const updatedPatients = patients.filter( patient => patient.id !== id );
    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          patients={patients}
          setPatients={setPatients}
          patient={ patient }
          setPatient={setPatient}
        />
        <ListadoPaciente
          patients={ patients }
          setPatient={ setPatient }
          deletePatient={ deletePatient }
        />
      </div>
    </div>
  )
}

export default App
