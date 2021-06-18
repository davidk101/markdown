import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from "../context/firebase";

// store user state
export default function useAuthListener(){

    // check if user exists in local storage
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const {firebase} = useContext(FirebaseContext);

    // listens in first iteration of application
    useEffect(() => {

        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser)); // set local storage with auth user
                setUser(authUser);
            }
            else{
                localStorage.removeItem('authUser');
                setUser(null);
            }
        })

        return () => listener(); // avoid mounting errors

    }, [firebase]);

    return {user};

}
