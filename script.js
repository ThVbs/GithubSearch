function getProfile() {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        const profile = document.getElementById('profile-info');
        if (data.message === 'Not Found') {
          profile.innerHTML = "No profile";
        } else {
          const name = data.name ? data.name : 'N/A';
          profile.innerHTML = `
            <img id="imgurl" src="${data.avatar_url}"><br> 
            <span id="OutData">Nome: </span>${name}<br>
            <span id="OutData">Nickname: </span> ${data.login}<br>
            <span id="OutData">Quantidade de repositorios:</span> ${data.public_repos}<br>
            <span id="OutData">Seguidores: </span> ${data.followers}<br>
            <span id="OutData">Seguindo: </span> ${data.following}<br><span id="OutData">Repositorio Link: </span> ${data.html_url+'/?tab=repositories'}<br>

          `;
          }
          if (data.name === "ThVbs") {
            profile.innerHTML += '<p>Este é o perfil do criador desta API</p>';
          }
      });
  }
  