import { createUser, uploadPhoto } from './utils';

async function handleProfileSignup() {
  try {
    const [body, fullName] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${body.body} ${fullName.firstName} ${fullName.lastName}`);
  } catch {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
