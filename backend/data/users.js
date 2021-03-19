import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'SocksGlamour',
    email: "socksglamour@gmail.com",
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true
  },
  {
    name: 'Nazar Ozarko',
    email: "ozarkonv@gmail.com",
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Sasha',
    email: "sasha@gmail.com",
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users