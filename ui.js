class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-secondary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <h3 class="page-heading mb-3">Latest Repos</h3>
    `;
  }
  showAlert(message, className) {
    this.clearAlert();
    // *create div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // *place div
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    // *timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) currentAlert.remove();
  }
  clearProfile() {
    this.profile.innerHTML = '';
  }
}