import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestTwoService } from './test-two.service';

describe('TestTwoService', () => {
  let service: TestTwoService;
  let injector:TestBed;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TestTwoService]
    });
    injector = getTestBed();
    service = injector.get(TestTwoService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(()=>{
    httpMock.verify();
  });


  const dummyUserListResponse = {
    data: [
      { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
      { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
      { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
    ],
  };  


  it('getUserList() should return data', () =>{
    service.getUserList().subscribe((res) =>{
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

  const dummyUserDetails = {
    data: { id: 1, 
      first_name: 'George', 
      last_name: 'Bluth', 
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' 
    }
  };
  
  const tranformedDummyUserDetails = {
    data: {
      id: 1,
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
      university: 'MIT',
    },
  };

  it('getUserDetails() should return tranformed data',() =>{
    service.getUserDetails('1').subscribe((res) =>{
      expect(res).toEqual(tranformedDummyUserDetails);
    });
    const req= httpMock.expectOne('https://reqres.in/api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserDetails);
  });

it('getDepartmentMapping() should return data', () =>{

})


});


