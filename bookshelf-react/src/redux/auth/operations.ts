import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  browserLocalPersistence,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { getDatabase, set, ref, child, get } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IUserData {
  email: string;
  password: string;
  name: string;
}

type IUSerDataLogin = Pick<IUserData, 'email' | 'password'>;

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

export const createUser = createAsyncThunk('auth/createUser', async (dataUser: IUserData, thunApi) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    await updateProfile(auth.currentUser as User, {
      displayName: dataUser.name,
    });
    const data = {
      name: res.user.displayName,
      email: res.user.email,
    };
    return data;
  } catch (error: any) {
    return thunApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (dataUser: IUSerDataLogin, thunApi) => {
  try {
    const res = await signInWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    const data = {
      name: res.user.displayName,
      email: res.user.email,
    };
    return data;
  } catch (error: any) {
    return thunApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunApi) => {
  try {
    await auth.setPersistence(browserLocalPersistence);
    const user = auth.currentUser;
    if (user === null) {
      return;
    }
    const data = {
      name: user.displayName,
      email: user.email,
    };
    return data;
  } catch (error: any) {
    return thunApi.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunApi) => {
  try {
    await signOut(auth);
    return;
  } catch (error: any) {
    return thunApi.rejectWithValue(error.message);
  }
});

// sdfsdfsf@mail.com
