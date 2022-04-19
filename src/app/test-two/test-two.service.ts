import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestTwoService {

  constructor(private _http: HttpClient) {}

  getUserList(): Observable<any> {
    return this._http.get('https://reqres.in/api/users');
  }

  getUserDetails(id: any) {
    return this._http.get(`https://reqres.in/api/users/${id}`)
          .pipe(map((data) => this.transformResponseToAddUniversity(data)));
  }

  // this method transforms the response and adds "university" property to the json
  transformResponseToAddUniversity(response: any) {
    response['data']['university'] = 'MIT';
    return response;
  }

  // JUST FOR TESTING PURPOSE, NOT USED ANYWHERE IN PROJECT
  getDepartmentMapping(deptId: string | number | boolean, studentId: string | number | boolean) {
    let param = new HttpParams();
    param = param.append('deptId', deptId);
    param = param.append('userId', studentId);
    return this._http.get(`https://someUrl.com/association/`, {
      params: param,
    });
  }

  // JUST FOR TESTING PURPOSE, NOT USED ANYWHERE IN PROJECT
  saveUserAssociation(deptId: any, studentId: any) {
    return this._http.post(`https://someUrl.com/association/`, {
      deptId: deptId,
      studentId: studentId,
    });
  }
}


//https://shashankvivek-7.medium.com/testing-services-in-angular-karma-ed49f8d5b264
//https://offering.solutions/blog/articles/2017/10/02/testing-an-angular-http-service/