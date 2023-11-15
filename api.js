const RutaApi = "https://snp0h1z7-3000.brs.devtunnels.ms"

//Método POST
function post() {
  let Nombre = document.getElementById("Nombre").value;
  let Descripcion = document.getElementById("Descripcion").value;
  let Cantidad = document.getElementById("Cantidad").value;
  console.log(Nombre, Descripcion, Cantidad)

  const data = JSON.stringify({
    Nombre,
    Descripcion,
    Cantidad
 });

   const requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: data,
      redirect: "follow"
   };

  fetch(`${RutaApi}/productos`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        console.log(json.status);  

        if (json.status === 201) {
          alert("Se cargó el producto!!");
          // También puedes acceder a la información del producto
          console.log(json.data);
        } else {
          alert("No se cargó el producto!!");
          console.log(json.message);
        }               
    })
    .catch((error) => {
      console.log("error", error);
    });
}

//Método GET
function getProductos() {

  const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
};
  fetch(`${RutaApi}/productos`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      
      const tablaProductos = document.getElementById("tabla-productos");
      const tbody = tablaProductos.querySelector("tbody");

      // Limpia el contenido existente en la tabla
      tbody.innerHTML = "";

      data[0].forEach((producto) => {
 
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${producto.id_producto}</td>
          <td>${producto.Nombre}</td>
          <td>${producto.Descripcion}</td>
          <td>${producto.Cantidad}</td>
        `;
        console.log(producto)
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}

           
          
