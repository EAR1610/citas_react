/**
 * ESTE COMPONENTE SE ENCARGA DE MOSTRAR EL HEADER (ENCABEZADO) DE NUESTRA PAGINA WEB
 * ESTA FORMADO POR UN H1, SPAN Y SUS RESPECTIVAS CLASES DE TAILWIND
 * NO RECIBE PROPS
 */

const Header = () => {
    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes { ' ' } Premium { ' ' }
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header;