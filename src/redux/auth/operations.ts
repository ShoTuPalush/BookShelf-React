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
import { getDatabase, set, ref, child, get } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { RehydrateErrorType } from 'redux-persist';
import { addSaveBook, clearSaveBooks } from '../pagination/slice';

interface IUserData {
  email: string;
  password: string;
  name: string;
}

type IUSerDataLogin = Pick<IUserData, 'email' | 'password'>;

type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: RehydrateErrorType;
};

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();

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
const database = getDatabase(app);

const loadDb = async (user: any, thunkApi: any) => {
  const userId = user.uid;

  const res = await get(child(ref(database), `users/${userId}`));

  if (res.val()?.books !== undefined) {
    const books = JSON.parse(res.val()?.books);
    books.map((book: any) => thunkApi.dispatch(addSaveBook(book)));
  }
};

export const createUser = createAppAsyncThunk('auth/createUser', async (dataUser: IUserData, thunkApi) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    await updateProfile(auth.currentUser as User, {
      displayName: dataUser.name,
    });
    const data = {
      uid: res.user.uid,
      name: res.user.displayName,
      email: res.user.email,
    };
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAppAsyncThunk('auth/loginUser', async (dataUser: IUSerDataLogin, thunkApi) => {
  try {
    const res = await signInWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    const data = {
      uid: res.user.uid,
      name: res.user.displayName,
      email: res.user.email,
    };
    loadDb(data, thunkApi);
    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAppAsyncThunk('auth/refreshUser', async (_, thunkApi) => {
  try {
    await auth.setPersistence(browserLocalPersistence);
    const user = auth.currentUser;
    if (user === null) {
      return { uid: '', name: '', email: '' };
    }
    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    };
    loadDb(user, thunkApi);

    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOut = createAppAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await signOut(auth);
    thunkApi.dispatch(clearSaveBooks());
    return;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const saveDBList = createAppAsyncThunk('auth/saveDBList', async (book, thunkApi) => {
  try {
    const { auth, pagination } = thunkApi.getState();
    const isLoggenIn = auth.isLoggenIn;
    const userId = auth.user.uid;
    const book = pagination.saveBooks;
    console.log(book);

    if (isLoggenIn) {
      const res = await set(ref(database, 'users/' + userId), {
        books: JSON.stringify(book),
      });
      return res;
    }
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// tsehma.live@gmail.comasda
