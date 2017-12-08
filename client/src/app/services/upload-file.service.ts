import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as firebase from 'firebase';
import { FileUpload } from '../fileupload';

@Injectable()
export class UploadFileService {
  domain = 'http://localhost:8000;';    // Development Domain - Not Needed in Production

  constructor(private db: AngularFireDatabase, private http: Http) { }

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
        console.log(uploadTask.snapshot);
        fileUpload.name = fileUpload.file.name;
        formData.fileUrl = fileUpload.url;
        this.uploadFormdata(formData);
        this.saveFileData(fileUpload);
        formData.clear();
      }
    );
  }

  private uploadFormdata(data) {
    return this.http.post(this.domain + '/project/addProject', data).map(res => res.json());
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
}
