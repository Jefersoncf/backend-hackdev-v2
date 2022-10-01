import { create } from '../../repositories/user.js';

export async function createUser(body) {
  const user = await create(body);
  console.log(user);
  return user;
}
export default createUser;
