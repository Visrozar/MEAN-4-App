import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { FormService } from './form.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as firebase from 'firebase';
import { FileUpload } from '../fileupload';

@Injectable()
export class UploadFileService {   // Development Domain - Not Needed in Production
  authToken;
  options;

  constructor(private db: AngularFireDatabase, private http: Http, private authService: AuthService, private formService: FormService) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  private basePath = '/uploads';

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }, formData) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    const fileUrl = uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.formService.fileUrl = fileUpload.url;
        this.formService.fileName = fileUpload.name;
        formData.clear();
      }
    );
  }

  newProject(data) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.post(this.authService.domain + '/projects/newProject', data, this.options).map(res => res.json());
  }

  editProject(data) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.put(this.authService.domain + '/projects/editProject', data, this.options).map(res => res.json());
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
}
