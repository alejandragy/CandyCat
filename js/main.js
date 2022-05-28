document.getElementById("header").innerHTML=`
<nav>
    <div class="navContainer">
        <a href="index.html"><img src="./img/logo.png" alt="CandyCat" ></a>
        <button class="nav-toggle">
            <i class="fas fa-bars"></i>
        </button>
        <div class="nav-centerContainer .nav-visible">
            <ul class="nav-center__linksContainer">
                <li class="nav-center__links__item"><a href="index.html" class="nav-center__links__link">Inicio</a></li>
                <li class="nav-center__links__item"><a href="tienda.html" class="nav-center__links__link">Productos</a></li>
                <li class="nav-center__links__item"><a href="about.html" class="nav-center__links__link">Sobre CandyCat</a></li>
                <li class="nav-center__links__item"><a href="contacto.html" class="nav-center__links__link">Contacto</a></li>
            </ul>
        </div>

        <ul class="nav-rightContainer">
            <li class="nav-right__item"><a href="#"class="nav-right__link"><i class="fas fa-user"></i>Ingresar</a></li>
            <li class="nav-right__item"><a href="#"class="nav-right__link"><i class="fas fa-cart-shopping"></i>Carrito</a></li>
        </ul>
    </div>
</nav>
`

document.getElementById("footer").innerHTML =`
<div class="socialContainer">
    <a href="https://www.instagram.com/candycatjuguetes/"><i class="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/candycat.tienda"><i class="fab fa-facebook-square"></i></a>
</div>

<ul class="nav-fContainer">
    <li class="nav-f__item"><a href="index.html" class="nav-f__link">Inicio</a></li>
    <li class="nav-f__item"><a href="tienda.html" class="nav-f__link">Productos</a></li>
    <li class="nav-f__item"><a href="about.html" class="nav-f__link">Sobre CandyCat</a></li>
    <li class="nav-f__item"><a href="contacto.html" class="nav-f__link">Contacto</a></li>
</ul>

<p class="copyright">
    CandyCat Juguetes © 2022 - Todos los derechos reservados
</p>
`

/*botón responsive nav*/ 
const navToggle = document.querySelector(".nav-toggle");
const navCenter = document.querySelector(".nav-centerContainer");

navToggle.addEventListener("click", () => {
    navCenter.classList.toggle("nav-visible");
})