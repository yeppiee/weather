type Holiday = {
  name: string;
  date: {
    iso: string;
  }
}

export type CalendarResponse = {
  meta: {
    code: number
  };
  response: {
    holidays: Holiday[];
  };
}
