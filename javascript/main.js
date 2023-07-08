const carrito = [];

const productos = [
  { codigo: "a", nombre: "Cata Nacional", precio: 5000 },
  { codigo: "b", nombre: "Cata Importado", precio: 8000 },
  { codigo: "c", nombre: "Cata De autor", precio: 12000 },
  { codigo: "d", nombre: "Cata Mix Premium", precio: 16000 },
  { codigo: "e", nombre: "Whisky Habermas", precio: 16000 },
  { codigo: "f", nombre: "Whisky Butler", precio: 7990 },
  { codigo: "g", nombre: "Whisky Latour", precio: 14000 },
  { codigo: "h", nombre: "Whisky Zizek", precio: 8562 },
  { codigo: "i", nombre: "Whisky Nussbaum", precio: 18000 },
  { codigo: "j", nombre: "Whisky Taylor", precio: 32000 },
  { codigo: "k", nombre: "Whisky Badiou", precio: 45000 },
];

function buscarProductos(codigo) {
  let resultado = productos.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

function terminarCompra() {
  const cata = new Compra(carrito);
  console.log(cata.obtenerSubtotal());
}

function catar() {
  let codigo = prompt(
    "Ingresa el código de tu Cata Experience ó Cata Experience a casa:"
  );
  let cataElegida = buscarProductos(codigo);
  if (cataElegida !== undefined) {
    carrito.push(cataElegida);
    alert(
      "🥃" + cataElegida.nombre + " se agregó a tu Carrito de Experiencias 🥃"
    );
    let respuesta = confirm("¿Querés sumar otra experiencia?");
    if (respuesta === true) {
      catar();
    } else {
      console.table(carrito);
      terminarCompra();
    }
  } else {
    alert("Ítem no encontrado. Por favor ingresá otra opción.");
    catar();
  }
}

function comenzar() {
  let usuario = prompt("Ingrese su Nombre y apellido:");
  console.log("🥃👋🏼Bienvenidx " + usuario);
  let edad = prompt("Ingrese su edad:");

  if (edad >= 21) {
    console.log(
      "👍🏼Como sos mayor de edad, podés elegir entre las siguientes experiencias, chequealas en nuestra web: (a,b,c,d,e,f,g,h,i,j,k)"
    );
    let experiencia = alert(
      "Elegí tu CataExperience🥃declarando catar() en la consola"
    );
  } else {
    alert(
      "🚫No podemos sumarte a esta experiencia, tenés que ser mayor de edad🚫"
    );
  }
}

comenzar();
