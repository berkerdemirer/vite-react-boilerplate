import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { ENV } from '@/lib/env';
import { paths } from '@/lib/schema';

const fetchClient = createFetchClient<paths>({
  baseUrl: ENV.VITE_API_BASE_URL + '/api/v1',
  credentials: 'include',
});

export const $api = createClient(fetchClient);
