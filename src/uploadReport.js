import { viewerEndpoint } from './DEFAULTS';
import makeRequest from './makeRequest';

export default function uploadReport({
  snaps,
  sha,
  endpoint = viewerEndpoint,
  apiKey,
  apiSecret,
}) {
  return makeRequest({
    url: `${endpoint}/api/reports/${sha}`,
    method: 'POST',
    json: true,
    body: {
      snaps,
    },
  }, { apiKey, apiSecret });
}