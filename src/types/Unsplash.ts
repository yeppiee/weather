export type Url = {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  }
}

export type Results = Array<Url>;

export type UnsplashProps = {
  images: Results;
};
