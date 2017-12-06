// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAqCL3HM6QL1qCJ6mIjxE7jlxHoq4y-Y0Y',
    authDomain: 'virtual-biotech.firebaseapp.com',
    databaseURL: 'https://virtual-biotech.firebaseio.com',
    projectId: 'virtual-biotech',
    storageBucket: '',
    messagingSenderId: '1067100368417'
  }
};
