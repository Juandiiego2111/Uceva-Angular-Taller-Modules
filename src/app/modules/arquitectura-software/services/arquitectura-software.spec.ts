import { TestBed } from '@angular/core/testing';

import { ArquitecturaSoftware } from './arquitectura-software';

describe('ArquitecturaSoftware', () => {
  let service: ArquitecturaSoftware;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitecturaSoftware);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
