import Response from '@/_types/api/Response';
import ky from 'ky';
import { HttpMethod, Input, Options } from 'node_modules/ky/distribution/types/options';

const fetcher = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_HOST,
  timeout: 10000, // 일정 시간 이상일 경우 timeout
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    //요청 전 작업
    beforeRequest: [
      (request) => {
        console.log('jiwon beforeRequest request', request);
      },
    ],
    afterResponse: [
      (request, option, response) => {
        console.log('jiwon afterResponse request', request);
        console.log('jiwon afterResponse option', option);
        console.log('jiwon afterResponse response', response);
      },
    ],
  },
});

export const kyRequest = async <TypeResponse, TypeRequest = unknown>(
  method: HttpMethod,
  url: Input,
  params?: TypeRequest,
  config: Options = {},
) => {
  try {
    const response = await fetcher[method](url, { ...config, json: params }).json<Response<TypeResponse>>();
    console.log('@@@@ kyRequest response @@@');

    return response as Response<TypeResponse>;
  } catch (error) {
    console.error(`@@@@ method : ${method}, url : ${url} , params : ${params} request failed @@@`, error);
    if (error instanceof Error) {
      throw new Error(`Request failed: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
  }
};
