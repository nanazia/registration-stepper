import { TestBed, inject, async } from '@angular/core/testing';

import { GroupsService } from './groups.service';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ],
    declarations: []
  }));

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', () => {
    const service: GroupsService = TestBed.get(GroupsService);
    expect(service).toBeTruthy();
  });

  it(`should get groups`, async(inject([GroupsService, HttpTestingController],
    (service: GroupsService, backend: HttpTestingController) => {
      service.getGroups().subscribe();

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url.endsWith('/assets/mock.json') && req.method === 'GET';
      }, `GET groups`);
  })));
});
