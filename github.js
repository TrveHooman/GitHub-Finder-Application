class Github {
  constructor() {
    this.client_id = '85d9e5b3df7f540b31d9';
    this.client_secret = '98814012a373a551e080c96b05e9f79ad403ad04';
  }
  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileRes.json();

    return {profile};
  }
}
