module.exports = {
  validUser: {
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'Password123',
    confirmPassword: 'Password123'
  },
  invalidUser: {
    name: '',
    email: 'invalidemail',
    password: 'short',
    confirmPassword: 'mismatch'
  }
};