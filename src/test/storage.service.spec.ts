import { TestBed } from '@angular/core/testing';
import { StorageService } from '../app/services/storage.service';
import { describe, beforeEach, it, expect } from 'vitest';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
