export default interface Response<T> {
  data: T;
  statusCd: string;
  statusMsg: string;
}
