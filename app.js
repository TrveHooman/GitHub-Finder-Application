const github = new Github;
const ui = new UI;

// *Search input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== ''){
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // *Show Alert
        } else {
          // *Show Profile
        }
      })
  } else {
    // *Clear Profile
  }
  e.preventDefault();
})