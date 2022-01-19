let nombre = document.getElementById('name').value
let password = document.getElementById('pass')
let boton = document.getElementById('boton')

function entrar () {
    if (password.value === '123') {
        alert('Bienvenido a PGIRHS')
        window.location.href = 'file:///C:/Users/Devel/Desktop/Desarrollo/proyecto%202/index2.html'
    } else {
        alert('contraseña incorrecta')
        return false
    }
}
boton.addEventListener('click', entrar)
