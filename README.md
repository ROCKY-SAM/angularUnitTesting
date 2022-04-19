
 
Note that :

    HttpClientTestingModule is imported to mock HttpClientModule because we don’t want to make actual http requests while testing the service.
    HttpTestingController is injected into tests, that allows for mocking and flushing of requests.
    httpMock.verify() is called after each tests to verify that there are no outstanding http calls
 

/*
stopped from here

Note that in getUserDetails() we are simply calling a REST API, but here things are different. We are passing params using HttpParams
*/

https://shashankvivek-7.medium.com/testing-services-in-angular-karma-ed49f8d5b264
https://offering.solutions/blog/articles/2017/10/02/testing-an-angular-http-service/