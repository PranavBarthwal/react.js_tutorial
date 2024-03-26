import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);    
    }

    async createAccount({email, password, name}){
        try{
            const UserAccount = await this.account.create(ID.unique(), email, password, name);
            if(UserAccount){
                return this.login({email, password});
            }else{
                return UserAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try {
           return await this.accountcreateEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService





// Explanation

// The provided code defines a class AuthService that provides methods for user authentication. This class is part of a JavaScript module that uses the Appwrite SDK to interact with an Appwrite backend.

// The AuthService class has two properties: client and account. client is an instance of the Client class from the Appwrite SDK, and account is an instance of the Account class from the Appwrite SDK.

// In the constructor of AuthService, the client object is configured with the endpoint and project ID of the Appwrite backend. These values are imported from a configuration file. The account object is then initialized with the configured client object.

// The createAccount method is an asynchronous method that takes an object with email, password, and name properties. It attempts to create a new user account on the Appwrite backend using these details. If the account creation is successful, it attempts to log the user in by calling the login method. If the account creation is not successful, it returns the response from the Appwrite backend.

// The login method is an asynchronous method that takes an object with email and password properties. It attempts to create a new session for the user on the Appwrite backend using these details.

// The getCurrentUser method is an asynchronous method that attempts to get the details of the currently logged-in user from the Appwrite backend.

// The logout method is an asynchronous method that attempts to delete all sessions for the currently logged-in user on the Appwrite backend, effectively logging the user out.

// At the end of the module, an instance of AuthService is created and exported as the default export of the module. This allows other parts of the application to import and use this instance, ensuring that there is only one instance of AuthService throughout the application.


//_____________________________________________________________________________________


// Why we used class and constructor? 

// taki new account creation aur client ka endpoints se connection tbhi ho jab usse ek new object bnaya jaaye

// In JavaScript, a class is a blueprint for creating objects. A class encapsulates data for the object and methods to manipulate that data. 

// In the provided code, the `AuthService` class is used to create objects that interact with the Appwrite backend for user authentication. The methods in the class encapsulate the logic for creating an account, logging in, getting the current user, and logging out.

// The constructor method is a special method for creating and initializing an object created with a class. It runs automatically when a new object is instantiated from a class. 

// In the `AuthService` class, the constructor is used to initialize the `client` and `account` properties of the object. The `client` property is an instance of the `Client` class from the Appwrite SDK, and the `account` property is an instance of the `Account` class from the Appwrite SDK. The `client` object is configured with the endpoint and project ID of the Appwrite backend, and the `account` object is initialized with the configured `client` object. 

// By using a class and constructor, the code encapsulates the logic for interacting with the Appwrite backend in a reusable and organized manner. This makes the code easier to understand, maintain, and test.