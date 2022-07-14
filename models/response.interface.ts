export default interface Res<T> {
  message: string;
  response: T;
  status: number;
  pagination_limit: string;
}

export interface ResPage<T> {
  message: string;
  response: {
    data: T;
  };
  status: number;
}
