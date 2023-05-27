const EndPoints = {
  USERS: '/users',
  USER: (id) => `/users/${id}`,
  RANDOM_IMAGE: (gender) =>
    `https://randomuser.me/api/?gender=${gender}&inc=picture&noinfo`,
};

export default EndPoints;
