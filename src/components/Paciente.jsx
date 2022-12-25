/**
 * ESTE COMPONENTE SE ENCARGA DE MOSTRAR EL PACIENTE CON SU CODIGO HTML Y CSS
 * SE UTILIZÓ LA LIBRERIA SWEETALERT PARA UNA MEJORA VISUAL PARA EDITAR Y/O ELIMINAR EL PACIENTE 
 */

const Paciente = ({ patient, setPatient, deletePatient }) => {

  const { name, owner, email, date, symptoms, id } = patient;

  console.log(patient.name)
  
  const handleDelete = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'La cita ha sido eliminada correctamente.',
          'success'
        )
        deletePatient(id);
      }
    })
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{ name }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{ owner }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{ email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{ date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{ symptoms }</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={ () => setPatient( patient ) }
          >Editar</button>

          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={ handleDelete }
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente