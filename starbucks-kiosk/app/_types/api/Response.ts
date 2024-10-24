export default interface Response<T> {
  data: T;
  status: string;
  message: string;
}
