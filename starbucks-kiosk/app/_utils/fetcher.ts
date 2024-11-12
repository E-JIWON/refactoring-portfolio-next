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
        console.log('📡 Request:', {
          method: request.method,
          url: request.url,
        });
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        console.log('✅ Response:', {
          status: response.status,
          ok: response.ok,
        });
      },
    ],
  },
});

export const kyRequest = async <TypeResponse, TypeRequest = unknown>(
  method: HttpMethod,
  url: Input,
  params?: TypeRequest,
  config: Options = {}
) => {
  try {
    const response = await fetcher[method](url, { ...config, json: params }).json<TypeResponse>();

    // console.log('🤫 kyRequest Response:', {
    //   data: response.data,
    //   statusCd: response.status,
    //   statusMsg: response.message,
    // });

    return response as TypeResponse;
  } catch (error) {
    console.log('❌ Error:', {
      method,
      url,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  }
};
