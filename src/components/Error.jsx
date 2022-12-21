
/**
 * COMPONENTE PARA MOSTRAR EL ERROR DE LA PAGINA
 * EN ESTE CASO, SE UTILIZA LA FORMA DE PASAR LOS ELEMENTOS CUANDO SE INVOCA EL COMPONENTE
 * Y SE DES ESTRUCTURA COMO CHILDREN.
 */
const Error = ({ children }) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
      { children }
    </div>
  )
}

export default Error