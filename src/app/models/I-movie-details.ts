export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string
  budget: number
  genres: [IGenres];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [ICompany];
  production_countries: [IProductionCountries];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [ILanguages];
  status: string;
  tagline: string;
  title: string;
  video: boolean
  vote_average: number
  vote_count: number
}

interface IGenres {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface ILanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
