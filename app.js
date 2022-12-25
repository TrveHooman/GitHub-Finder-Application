const github = new Github;
const ui = new UI;

// *Search input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('submit', (e) => {
  const userText = e.target.value;

  if(userText !== ''){
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // *Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // *Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // *Clear Profile
    ui.clearProfile();
  }
  e.preventDefault();
});