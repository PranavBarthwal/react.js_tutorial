import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                },
            )
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }  
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            throw error;
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.error("Error getting post:", error);
            throw error;
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.error("Error getting posts:", error);
            throw error;
            return false;
        }
    }

    // File upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
            return false;
        }
    }

    // File delete service
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            throw error;
            return false;
        }
    }

    // File preview service
    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            FileId
        )
    }

}

const service = new Service();

export default service




// Explanation

// This JavaScript code defines a class Service that interacts with the Appwrite backend for various operations like creating, updating, deleting, and retrieving posts, as well as uploading, deleting, and previewing files.

// The Service class has three properties: client, databases, and bucket. client is an instance of the Client class from the Appwrite SDK. databases and bucket are instances of the Databases and Storage classes from the Appwrite SDK, respectively. These instances are initialized in the constructor of the Service class.

// The client instance is configured with the endpoint and project ID of the Appwrite backend, which are imported from a configuration file. The databases and bucket instances are initialized with the configured client instance.

// The Service class has several methods for interacting with the Appwrite backend:

// createPost: This method creates a new post in the Appwrite database. It takes an object with properties title, slug, content, featuredImage, status, and userId as an argument.

// updatePost: This method updates an existing post in the Appwrite database. It takes a slug and an object with properties title, content, featuredImage, and status as arguments.

// deletePost: This method deletes a post from the Appwrite database. It takes a slug as an argument.

// getPost: This method retrieves a post from the Appwrite database. It takes a slug as an argument.

// getPosts: This method retrieves a list of posts from the Appwrite database. It takes an array of queries as an argument, with a default value of querying for posts with a status of "active".

// uploadFile: This method uploads a file to the Appwrite storage. It takes a file as an argument.

// deleteFile: This method deletes a file from the Appwrite storage. It takes a fileId as an argument.

// getFilePreview: This method retrieves a preview of a file from the Appwrite storage. It takes a fileID as an argument.

// At the end of the file, an instance of the Service class is created and exported as the default export. This instance can be imported and used in other parts of the application to interact with the Appwrite backend.