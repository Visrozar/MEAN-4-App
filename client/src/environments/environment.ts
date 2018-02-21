// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDKnR2twPdudrMUPlI7MFvRW55WSsTDjQM',
    authDomain: 'virtualbiotech2017.firebaseapp.com',
    databaseURL: 'https://virtualbiotech2017.firebaseio.com',
    projectId: 'virtualbiotech2017',
    storageBucket: 'gs://virtualbiotech2017.appspot.com/',
    messagingSenderId: '62567647331'
  }
};
