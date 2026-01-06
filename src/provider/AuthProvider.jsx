// import React, { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
//   updateProfile,
//   onAuthStateChanged,
// } from "firebase/auth";

// export const AuthContext = createContext();

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const googleProvider = new GoogleAuthProvider();

//   // Email/Password Signup
//   const emailSignup = (name, email, password, photoURL) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password).then(
//       (result) => {
//         return updateProfile(result.user, {
//           displayName: name,
//           photoURL,
//         }).then(() => {
//           setUser({ ...result.user });
//           setLoading(false);
//         });
//       }
//     );
//   };

//   // Email/Password Login
//   const emailLogin = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password).then((res) => {
//       setUser(res.user);
//       setLoading(false);
//     });
//   };

//   // Google Login
//   const googleLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider).then((res) => {
//       setUser(res.user);
//       setLoading(false);
//     });
//   };

//   // Logout
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth).finally(() => setLoading(false));
//   };

//   // Observe Auth State
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     emailSignup,
//     emailLogin,
//     googleLogin,
//     logOut,
//   };

//   return (
//     <AuthContext value={authInfo}>{children}</AuthContext>
//   );
// };

// export default AuthProvider;
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // ✅ Email Signup
  const emailSignup = async (name, email, password, photoURL) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, {
      displayName: name,
      photoURL,
    });

    // ❌ manually setUser করা লাগবে না
    setLoading(false);
    return result;
  };

  // ✅ Email Login
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // ✅ Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  // ✅ Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // ✅ AUTH OBSERVER (MOST IMPORTANT)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // 🔥 always fresh & correct
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    emailSignup,
    emailLogin,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

