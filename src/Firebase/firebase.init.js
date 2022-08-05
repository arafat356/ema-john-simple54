import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};
export default initializeAuthentication;

/* steps for authentication 
-------------------------
Step-1 Initial Setup

1.firebase: create project
2.create web app
3.get configuration 
4.initializefirebase
5.Enable auth method
------------------
Step-2 
1.create login componenet
2.create register componenet
3.create route for login and register
 
---------------------------
step-3
1.set up sign in method 
2. setup sign out method 
3. user state 
4.special observer
4.return nessary methods and states from useFirebase
--------------------------------
step:4
1.create a auth context 
2.create context provider
3.use auth provider
.4.create useAuth hook
*/