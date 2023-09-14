const info = document.getElementById("profile-info");
function inicial() {
  info.addAttribute("hidden")
}
function getProfile() {
  event.preventDefault();
  const username = document.getElementById('usernameInput').value;
  fetch(`https://api.github.com/users/${username}`)

    .then(res => res.json())
    .then(data => {


      const profile = document.getElementById('profile-info');

      if (data.message === 'Not Found') {
        profile.innerHTML = "No profile";
      }
      else {
        info.removeAttribute("hidden");
        profile.innerHTML = `
        <div class="profile">
            <img id="imgurl" src="${data.avatar_url}"><br> 
            <span id="OutData">Nome: </span>${data.name}<br>
            <span id="OutData">Nickname: </span> ${data.login}<br>
            <span id="OutData">Quantidade de repositorios:</span> ${data.public_repos}<br>
            <span id="OutData">Seguidores: </span> ${data.followers}<br>
            <span id="OutData">Seguindo: </span> ${data.following}<br><span id="OutData">Repositorio Link: </span> ${data.html_url + '/?tab=repositories'}<br>
          </div>
            `;

      }

      if (data.login === "ThVbs") {
        profile.innerHTML += '<h1 id="Secret">Perfil do criador desta APi </h1>';
        mudarTexto()

      }
    });


}
function mudarTexto() {


  var h1Element = document.getElementById("subname");

  if (h1Element) {
    h1Element.innerText = "As it should be";
  }



}

