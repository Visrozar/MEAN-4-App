import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  domain = "http://localhost:8000"; // Development Domain - Not Needed in Production
  authToken;
  user;
  options;

  constructor(
    private http: Http
  ) { }

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

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username.toLowerCase()).map(res => res.json());
  }

  // Function to check if dealname is taken
  checkDealname(dealname) {
    return this.http.get(this.domain + '/authentication/checkDealname/' + dealname.toLowerCase()).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email.toLowerCase()).map(res => res.json());
  }

  // Function to login user
  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to get user's Dashboard data
  getDashboard() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/dashboard', this.options).map(res => res.json());
  }

  getFilterList() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/filters/getFilters', this.options).map(res => res.json());
  }

  // Function to get user's Profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/profile', this.options).map(res => res.json());
  }

  // Function to delete a Project
  deleteProject(id) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.delete(this.domain + '/projects/deleteProject/' + id, this.options).map(res => res.json());
  }

  saveFilter(obj) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.post(this.domain + '/filters/addFilter/', obj).map(res => res.json());
  }

  deleteFilter(name) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.delete(this.domain + '/filters/deleteFilter/', name).map(res => res.json());
  }

  newVC(data) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.post(this.domain + '/vcs/addVc', data, this.options).map(res => res.json());
  }

  getVC() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/getVcs', this.options).map(res => res.json());
  }

  editVC(data) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.put(this.domain + '/vcs/editVc', data, this.options).map(res => res.json());
  }

  // Function to delete a VC
  deleteVC(id) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.delete(this.domain + '/vcs/deleteVc/' + id, this.options).map(res => res.json());
  }

  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }

}
