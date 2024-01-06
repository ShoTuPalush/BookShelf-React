import {
  getAuth,
  createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { getDatabase, set, ref, child, get } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IUserData {
  email: string;
  password: string;
  name: string;
}

const firebaseConfig = {
  apiKey: 'AIzaSyDlCgJ9fZplPwmRqRoB7i6ufDSRrpDBmIQ',
  authDomain: 'bookshelf-react-3308f.firebaseapp.com',
  databaseURL: 'https://bookshelf-react-3308f-default-rtdb.firebaseio.com',
  projectId: 'bookshelf-react-3308f',
  storageBucket: 'bookshelf-react-3308f.appspot.com',
  messagingSenderId: '765717012281',
  appId: '1:765717012281:web:f4e59b04452aa06d1592e8',
  measurementId: 'G-MVKYCYDPM2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const database = getDatabase(app);

export const createUser = createAsyncThunk('auth', async (dataUser: IUserData, thunApi) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    await updateProfile(auth.currentUser as User, {
      displayName: dataUser.name,
    });
    return res;
  } catch (error: any) {
    return thunApi.rejectWithValue(error.message);
  }
});
