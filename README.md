# Real Estate

## 🧰:Languages and Tools:

![NodeJS](https://img.shields.io/badge/nodejs%20-%ffb400.svg?&style=for-the-badge&logo=nodeJs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/expressjs%20-%23FF6F00.svg?&style=for-the-badge&logo=express&logoColor=white)
![ReactJS](https://img.shields.io/badge/reactjs%20-%2300599C.svg?&style=for-the-badge&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb%20-%2320232a.svg?&style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/redux%20-%ffb400.svg?&style=for-the-badge&logo=redux&logoColor=white)
![Redux-Toolkit](https://img.shields.io/badge/reduxtoolkit%20-%23150458.svg?&style=for-the-badge&logo=redux-toolkit&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## How to run:

- Clone this repository or fork it.
  - To clone this repository type `git clone https://github.com/AkSrivastav/real-estate-0.git` on your command line
  - To fork this repository, click fork button of this repository then type `git clone https://github.com/<your username>/real-estate-0.git`
- Inside your project folder, create a new file named `.env` which stores informations about server side such as `MONGO_URI`, `JWT_SECRET` and `PORT` informations
  - store your database URI inside `MONGO_URI` variable
  - store your security key inside `JWT_SECRET` variable
  - example:
  ```
  MONGO_URI = mongodb+srv://<username>:<password>@<collection_name>.<providedbymongodb>.mongodb.net/ (MongoDB Atlas)
  or
  MONGO_URI = mongodb://127.0.0.1:27017/realestate (MongoDB Compass)
  JWT_SECRET = Thisisanexampleofjwtsecretkey
  PORT = 3000 (Default)
  set the same port in project/client/vite.config.js
  ```
  
- Inside `client` folder, create a new file called `.env` which stores your information about client side such as `AUTH_DOMAIN` and `MESSAGING_SENDER_ID` informations. Example is given.

  - store your security keys inside variables
  - example:

  ```
  VITE_FIREBASE_API_KEY = Akjfhjjhgj5j409ig_fkjhgjj4ht9HJj
  AUTH_DOMAIN = your-project-name.firebaseapp.comm
  PROJECT_ID = your-project-name
  STORAGE_BUCKET = your-project-name.appspot.com
  MESSAGING_SENDER_ID = 6039583758492 (Yours)
  APP_ID = 2:6346565456543:web:7939t8vn2jjt5g83gj94u5t4
  ```

- Install all dependencies

  - Client side: on the `client` directory type `npm install`
  - Server side: on the `project` directory type `npm install`

- Run it on node js:
  
  - Client side: on the `client` directory type `npm run dev`
  - Server side: on the `project` directory type `npm start` 
