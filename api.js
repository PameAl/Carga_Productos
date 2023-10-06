
//Método POST
function post() {
      let nombre = document.getElementById("nombre").value;
      let descripcion = document.getElementById("descripcion").value;
      let cantidad = document.getElementById("cantidad").value;

      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("descripcion", descripcion);
      formData.append("cantidad", cantidad);

      fetch("https://snp0h1z7-3000.brs.devtunnels.ms/productos", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            console.log(json.status);  

          if (json.status == 201) {
            alert("Se cargo el producto!!");
          } else {
            alert("No se cargo el producto!!");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
//Método GET
function getProductos() {
  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",

  // };
  const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
};
  fetch("https://snp0h1z7-3000.brs.devtunnels.ms/productos", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const tablaProductos = document.getElementById("tabla-productos");
      const tbody = tablaProductos.querySelector("tbody");

      // Limpia el contenido existente en la tabla
      tbody.innerHTML = "";

      data.forEach((producto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>${producto.descripcion}</td>
          <td>${producto.cantidad}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}

           
          
