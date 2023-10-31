const RutaApi = "https://snp0h1z7-3000.brs.devtunnels.ms"

//Método POST

/*async function post() {
  const Nombre = $("Nombre").val();
  const Descripcion = $("Descripcion").val();
  const Cantidad = $("Cantidad").val();

  const datos = {
      Nombre,
      Descripcion,
      Cantidad,
    
  };

  const url = `${RutaApi}/productos`;
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
  };

  try {
      const response = await fetch(url, options);
      console.log (response)
      if (response.ok) {
          console.log(datos)
      
          alert('La carga del alumno se realizó con éxito.');
      } else {
          console.error('Error en la solicitud:', response.statusText);
          alert('Hubo un error al intentar hacer la carga. Por favor, inténtelo de nuevo más tarde.');
      }
  } catch (error) {
      console.error('Hubo un error al procesar la solicitud:', error);
      alert('Hubo un error al intentar hacer la carga. Por favor, inténtelo de nuevo más tarde.');
  }
}*/

//Método POST
function post() {
  let Nombre = document.getElementById("Nombre").value;
  let Descripcion = document.getElementById("Descripcion").value;
  let Cantidad = document.getElementById("Cantidad").value;


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
    .then((json) => {s
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

           
          
