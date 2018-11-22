import { TestBed } from '@angular/core/testing';
import { UsersService } from 'src/users.service';

describe('Usersservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
