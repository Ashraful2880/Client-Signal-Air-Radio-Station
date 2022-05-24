import { getAuth, updateProfile, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import iniAuthentication from "../Firebase/Firebase.init";

iniAuthentication();
const useFirebase = () => {
    const auth = getAuth();

    // All State Here

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState<any>("");
    const [isloading, setIsLoading] = useState(true);

    // Signin With Google

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const googleUser = { displayName: user.displayName, email: user.email }
                setUser(user);
                updateUser(googleUser);
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // Create User With Email & Password

    const handleName = (event: any) => {
        const name = (event.target.value);
        setName(name)
    }
    const handleEmail = (event: any) => {
        const email = (event.target.value);
        setEmail(email)
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value)
    }

    //<-------------- RegisterUser --------------->

    const handleRegister = (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = ({ ...user, displayName: name });
                setUser(newUser);
                //  updateName();
                saveUser();
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    /* const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
 
        }).catch((error) => {
            setError(error.message)
        });
    } */

    // Handle Sign in Existing User

    const handleSignIn = (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // Handle Sign Out

    const handleSignOut = () => {
        const auth = getAuth();
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // observe whether user auth state changed or not

    useEffect((): any => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //<----------- Save User Info To Database ---------->

    const saveUser = () => {
        const dbUser = { displayName: name, email: email }
        fetch('https://ali-jahan-academy.herokuapp.com/users', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(dbUser)
        })
            .then(res => res.json())
            .then(result => {
                ;
            })
    }

    //<----------- Update User Info To Database ---------->

    const updateUser = (googleUser: any) => {
        fetch('https://ali-jahan-academy.herokuapp.com/users', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(googleUser)
        })
            .then(res => res.json())
            .then(result => {
                ;
            })
    }

    return { handleName, handleEmail, handlePassword, handleRegister, error, user, handleSignIn, handleSignOut, googleSignIn, setError, isloading }
}

export default useFirebase;