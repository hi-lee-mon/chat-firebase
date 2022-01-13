import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config";

/**
 * サインアップ
 * @param email 
 * @param password 
 * @returns 
 */
export const basicSignin = async (email: string, password: string) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    return {
      isSuccess: true,
      user: cred.user,
    }
  } catch (error) {
    return {
      isSuccess: false,
      user: null,
    }
  }
}

/**
 * サインイン
 * @param email 
 * @param password 
 * @returns 
 */
export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true
  } catch (error) {
    return false
  }
}

/**
 * ログアウト
 */
export const logout = async () => {
  await signOut(auth);
};