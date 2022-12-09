export interface MatchesModel {
  league: League;
  videogame: Videogame;
  live_embed_url: string;
  streams_list: StreamsList[];
  number_of_games: number;
  scheduled_at: string;
  original_scheduled_at: string;
  id: number;
  streams: Streams;
  serie: Serie;
  official_stream_url: string;
  results: Result[];
  tournament: Tournament;
  slug: string;
  end_at: null;
  forfeit: boolean;
  game_advantage: null;
  match_type: string;
  status: string;
  detailed_stats: boolean;
  tournament_id: number;
  winner: null;
  videogame_version: null;
  serie_id: number;
  winner_id: null;
  modified_at: string;
  games: Games[];
  live: Live;
  opponents: OpponentElement[];
  rescheduled: boolean;
  begin_at: string;
  draw: boolean;
  name: string;
  league_id: number;
}

export interface Games {
  begin_at: null;
  complete: boolean;
  detailed_stats: boolean;
  end_at: null;
  finished: boolean;
  forfeit: boolean;
  id: number;
  length: null;
  match_id: number;
  position: number;
  status: string;
  video_url: null;
  winner: Winner;
  winner_type: string;
}

export interface Winner {
  id: null;
  type: string;
}

export interface League {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
  url: string;
}

export interface Live {
  opens_at: null;
  supported: boolean;
  url: null;
}

export interface OpponentElement {
  opponent: OpponentOpponent;
  type: string;
}

export interface OpponentOpponent {
  acronym: string;
  id: number;
  image_url: string;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
}

export interface Result {
  score: number;
  team_id: number;
}

export interface Serie {
  begin_at: string;
  description: null;
  end_at: null;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string;
  season: null;
  slug: string;
  tier: string;
  winner_id: null;
  winner_type: null;
  year: number;
}

export interface Streams {
  english: English;
  official: English;
  russian: English;
}

export interface English {
  embed_url: null | string;
  raw_url: null | string;
}

export interface StreamsList {
  embed_url: string;
  language: string;
  main: boolean;
  official: boolean;
  raw_url: string;
}

export interface Tournament {
  begin_at: string;
  end_at: null;
  id: number;
  league_id: number;
  live_supported: boolean;
  modified_at: string;
  name: string;
  prizepool: null;
  serie_id: number;
  slug: string;
  tier: string;
  winner_id: null;
  winner_type: string;
}

export interface Videogame {
  id: number;
  name: string;
  slug: string;
}
