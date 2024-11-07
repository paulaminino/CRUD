document.addEventListener("DOMContentLoaded", () => {
    const url = `https://672bdb271600dda5a9f69101.mockapi.io/users`;
    const inputGet = document.getElementbyId("inputGet1Id");
    const inputPutId = document.getElementById("inputPutId");
    const btnGet1 = document.getElementById("btnGet1");
    const inputPostNombre = document.getElementById("inputPostNombre");
    const inputPostApellido = document.getElementById("inputPostApellido");
    const bntPost = document.getElementById("btnPost"); 
    const btnPut = document.getElementById("btnPut");
    const inputDelete = document.getElementById("inputDelete");
    const btnDelete = document.getElementById("btnDelete");
    const deleteBox = document.getElementbyId ("delete-box")
    const btnSendChanges = document.getElementbyId("btnSendChanges");
    const results = document.getElementById("results");
    const alertError = document.getElementById("alert-error");
    const dataModal = document.getElementById("dataModal")
const inputPutNombre = document.getElementById("inputPutNombre")
const inputPutApellido = document.getElementById("inputPutApellido")
})



// botón agregar
const agregarUsuario = (name, lastname) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({name, lastname}),
    })

    .then(response => {
        if(!response.ok) throw new Error("Ocurrió un error al agregar usuario.");
        return response.json();
    })
    .then(() => listadoRegistros());
};

btnPost.addEventListener("click", () => {
    const nombre =  inputPPo
})

//Botón Buscar - listadoRegistros
let valueinput = document.getElementById("inputGet1Id").value;

    fetch (url)
    .then (response => response.json())
    .then (data =>{
        listadoRegistros(data)

    })
    .catch(error => {
        console.error('Problema con tu operación fetch')
    });
    
   function listadoRegistros (data) { 
    data.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = `
        <p> ID: ${data.id}
        <p> Name: ${data.name}
        <p> Last Name: ${data.lastname}
        `;
        results.appendChild("li");
    });
    
};






// botón Borrar __________________________________________________

//const inputDelete = document.getElementById("inputDelete");
//const btnDelete = document.getElementById("btnDelete");
//const deleteBox = document.getElementbyId ("delete-box")
//const btnSendChanges = document.getElementbyId("btnSendChanges");


function borrarUsuario (id) { 
    fetch (url), {
    method: "DELETE",
    
    .then (response => {
        if(!response.ok) {
        } throw new Error("Ocurrió un error al eliminar el usuario.");
        return response.json();
    })

    .then (data => {
        console.log("Usuario eliminado:", data);
        alert("Usuario eliminado correctamente");
        listadoRegistros()
    });
}
    .catch(error => console.error ("Error al eliminar el usuario, error"))
}


btnDelete.addEventListener("click", () => {
   const valueDeleteImput = inputDelete.value;

   if (valueDeleteImput) {
    borrarUsuario (valueDeleteImput);
} else {
    alert ("Debe ingresar un ID válido");
}
}
);

// bnt Put
// bnt Put
const modificarUsuario = (nombre, apellido){
    fetch(url,{
    method:"PUT",
    body: JSON.stringify({nombre, apellido})
    })

.then(response => {
    if(!response.ok) throw new Error("Ocurrió un error al modificar usuario.");
    return response.json();
})
.then() => showModal();;
};

btnPut.addEventListener("click", () => {
modificarUsuario();
})

}

function showModal(){
    const btn = btnPut;
    const modal = dataModal;
    // Cuando el usuario hace clic en el botón, se abre la ventana
btnPut.addEventListener("click",function() {
    modal.style.display = "block";
    const nombre= inputPutNombre
const apellido= inputPutApellido
  });
}


btnPut.addEventListener("click", () => {
const modificarID = inputPutId.value;

    if () {
     borrarUsuario (valueDeleteImput);
 } else {
     alert ("Debe ingresar un ID válido");
 });
 }