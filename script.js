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
          profile.innerHTML = `
            <img id="imgurl" src="${data.avatar_url}"><br> 
            <span id="OutData">Nome: </span>${data.name}<br>
            <span id="OutData">Nickname: </span> ${data.login}<br>
            <span id="OutData">Quantidade de repositorios:</span> ${data.public_repos}<br>
            <span id="OutData">Seguidores: </span> ${data.followers}<br>
            <span id="OutData">Seguindo: </span> ${data.following}<br><span id="OutData">Repositorio Link: </span> ${data.html_url+'/?tab=repositories'}<br>

          `;
        }
      });
  }
  