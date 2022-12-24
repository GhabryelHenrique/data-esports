export interface Tournament {
  data: Data;
}

export interface Data {
  leagues: League[];
}

export interface League {
  tournaments: TournamentElement[];
}

export interface TournamentElement {
  id:        string;
  slug:      string;
  startDate: string;
  endDate:   string;
}
