async function generateFakerUsers() {
    var qt = document.querySelector("#quantUsers").value;
    var nat = document.querySelector("#natUsers").value;
    var inputGender = document.getElementsByTagName("input"); // pega uma coleção de elemento das tags.
    var gender = "";

    //console.log(inputGender[2]);
    for(let input of inputGender) {
        if (input.checked == true) {
             gender = input.value;
        }
    }
    
    var reply = await fetch(`https://randomuser.me/api/?results=${qt}&gender=${gender}&nat=${nat}`);
    var data = await reply.json()
    //console.log(data.results[0].email);
    document.querySelector(".allUsers").innerHTML = "";
    
    for(let user of data.results) { // imprime email de cada usuario.
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");

        userDiv.innerHTML =` 
        <img width="100" src=${user.picture.medium} alt="Foto de ${user.name.first}">
            <div class="info">
                <span><b>Nome: </b> ${user.name.first +" "+ user.name.last}</span>
                <span><b>Email: </b>${user.email}</span>
                <span><b>Nascimento: </b>${new Date(user.dob.date).toLocaleDateString()}</span>
                <span><b>Idade: </b>${user.dob.age}</span>
                <span><b>Cidade: </b> ${user.location.city}</span>
                <span><b>Estado: </b> ${user.location.state}</span>
                <span><b>País: </b>${user.location.country}</span>
                <span><b>Telefone: </b>${user.phone}</span>
            </div>`;
        document.querySelector(".allUsers").appendChild(userDiv);
    }
}