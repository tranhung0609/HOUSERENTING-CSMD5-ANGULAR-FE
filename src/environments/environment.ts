// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl : 'http://localhost:8003/login',
  firebaseConfig : {
    apiKey : "AIzaSyBrxQ0VM1pusl2Ey_J07gY8py0ch5_WhUs" ,
    authDomain : "hydra-tvh.firebaseapp.com" ,
    databaseURL : "https://hydra-tvh-default-rtdb.firebaseio.com" ,
    projectId : "hydra-tvh" ,
    storageBucket : "hydra-tvh.appspot.com" ,
    messagingSenderId : "249986935010" ,
    appId : "1:249986935010:web:ddf3c0806dd4d8b51a56bb" ,
    measurementId : "G-HCDEHGS1ZS"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
