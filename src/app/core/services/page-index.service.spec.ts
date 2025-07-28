import { TestBed } from '@angular/core/testing';

import { PageIndexService } from './page-index.service';

describe('PageIndexService', () => {
  let service: PageIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
