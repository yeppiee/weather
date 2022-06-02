export type Url = {
  urls: {
    raw: string;
  }
}

export type Results = Array<Url>;

export type UnsplashProps = {
  images: Results;
};
