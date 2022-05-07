export interface IBaseResponse<T = unknown> {
  status: number;
  data: T;
  message?: string;
}
