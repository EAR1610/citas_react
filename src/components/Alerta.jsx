
const Alerta = (icon, title) => {
    Swal.fire({
        position: 'center',
        icon: `${ icon }`,
        title: ` ${ title }`,
        showConfirmButton: true,
        timer: 1500
    })
}

export default Alerta