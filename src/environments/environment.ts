// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  localDB:"http://localhost:3000/",
firebaseConfig : {
    apiKey: "AIzaSyDmCWjQMzHbwO-5DovoJahd81HNUAzkKi4",
    authDomain: "angularschool-d74ff.firebaseapp.com",
    databaseURL: "https://angularschool-d74ff.firebaseio.com",
    projectId: "angularschool-d74ff",
    storageBucket: "angularschool-d74ff.appspot.com",
    messagingSenderId: "62655314254",
    appId: "1:62655314254:web:0291865085a7695857461f",
    measurementId: "G-8NPEJXKWVJ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
