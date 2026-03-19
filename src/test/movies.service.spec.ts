import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Movie } from '../app/model/movie.model';
import { MoviesService } from '../app/services/movies.service';

describe('Movies Service', () => {
  let service: MoviesService;

  // 1. Arrange: 가짜(Mock) 데이터 준비
  const mockMovies: Movie[] = [
    {
      id: '1',
      title: "Harry Potter and the Philosopher's Stone",
      duration: 120,
      budget: 1000,
      release_date: '2001',
    },
    {
      id: '2',
      title: 'The Lord of the Rings',
      duration: 120,
      budget: 1000,
      release_date: '2001',
    },
    {
      id: '3',
      title: 'The Matrix',
      duration: 120,
      budget: 1000,
      release_date: '1999',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    // 서비스 인스턴스 주입
    service = TestBed.inject(MoviesService);
    // 💡 핵심: getMovies()가 진짜 HTTP를 쏘는 대신, 우리가 만든 mockMovies를 Observable(of)로 감싸서 반환하게 가로챔
    vi.spyOn(service, 'getMovies').mockReturnValue(of(mockMovies));
  });

  it('works', async () => {
    expect(true).toBe(true);
  });

  it('should return all movies by default (when no params are passed)', () => {
    // Act & Assert: 리턴값이 Observable 이므로 subscribe 안에서 값을 까서 검증
    service.filterMovieList().subscribe((result) => {
      expect(result.length).toBe(3);
      expect(result).toEqual(mockMovies);
    });
  });

  //Filter movies by title only when a title is passed (no year)
  it('should filter movies by title only when a title is passed (no year)', () => {
    // Act & Assert: 리턴값이 Observable 이므로 subscribe 안에서 값을 까서 검증
    const title = 'harry';
    service.filterMovieList(title).subscribe((result) => {
      expect(result.length).toBe(1);
      expect(result).toEqual([
        {
          id: '1',
          title: "Harry Potter and the Philosopher's Stone",
          duration: 120,
          budget: 1000,
          release_date: '2001',
        },
      ] as Movie[]);
    });
  });

  // Filter movies by year only when a year is passed (no title)
  it('should filter movies by year only when a year is passed (no title)', () => {
    // Act & Assert: 리턴값이 Observable 이므로 subscribe 안에서 값을 까서 검증
    const year = '2001';
    service.filterMovieList(undefined, year).subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual([
        {
          id: '1',
          title: "Harry Potter and the Philosopher's Stone",
          duration: 120,
          budget: 1000,
          release_date: '2001',
        },
        {
          id: '2',
          title: 'The Lord of the Rings',
          duration: 120,
          budget: 1000,
          release_date: '2001',
        },
      ] as Movie[]);
    });
  });
});
