export interface ICity {
  name: string;
  code: string;
  country?: string;
}

export interface IJourneyTime {
  start: Date | null;
  end: Date | null;
}
