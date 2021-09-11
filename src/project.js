function getTeamInfo(name) {
  var teamInfo = {
    andres: {
      name: 'Andrés Ignacio Castrillón González',
      role: 'Development Team',
      email: 'andnachocas@gmail.com',
      image: 'Andres.png',
      background: '#2e46d1'
    },
    angie: {
      name: 'Angie Lizeth Santiago Piñeros ',
      role: 'Development Team',
      email: 'Lizeth04santiago@gmail.com ',
      image: 'Angie.png',
      background: '#802ed1'
    },
    daniel: {
      name: 'Daniel Eduardo Orjuela M.',
      role: 'Development Team',
      email: 'daniel.orju8@gmail.com',
      image: 'Daniel.png',
      background: '#c0500e'
    },
    jose: {
      name: 'José David Gómez C.',
      role: 'Development Team',
      email: 'jose-gch18@hotmail.com',
      image: 'Jose.png',
      background: '#d1b02e'
    },
    nelson: {
      name: 'Nelson Alejandro Garcia',
      role: 'Development Team',
      email: 'alejandro.garcia94@outlook.com',
      image: 'Nelson.png',
      background: '#114639'
    }
  }

  if (name) {
    return teamInfo[name];
  }

  return teamInfo;
}

function setMemberInfo(name) {
  var userInfo = getTeamInfo(name);

  var nameField = document.getElementById('popup-name'),
      roleField = document.getElementById('popup-role'),
      imageField = document.getElementById('popup-team-member'),
      descriptionField = document.getElementById('popup-description');

  nameField.innerHTML = userInfo.name;
  roleField.innerHTML = userInfo.role;
  imageField.src = `images/${userInfo.image}`;
  imageField.style.backgroundColor = userInfo.background;
  descriptionField.innerHTML = userInfo.email;
}

function initializeMembersInfo() {
  var membersInfo = getTeamInfo();

  var teamMembers = document.getElementById('team__members');
  var map = new Map(Object.entries(membersInfo));

  map.forEach(function(member, name) {
    teamMembers.innerHTML += '<a href="#popup" onclick="setMemberInfo(\'' + name + '\')"><img src="images/' + member.image + '" class="team-image" style="background-color: '+ member.background +'; "></a>'
  });
}

initializeMembersInfo();


