import constructReport from './constructReport';
import createDynamicEntryPoint from './createDynamicEntryPoint';
import createWebpackBundle from './createWebpackBundle';
import fetchReport from './fetchReport';
import loadCSSFile from './loadCSSFile';
import loadUserConfig from './loadUserConfig';
import processSnapsInBundle from './processSnapsInBundle';
import uploadReport from './uploadReport';

export default async function runForSha(sha, {
  config,
}) {
  const {
    apiKey,
    apiSecret,
    viewerEndpoint,
    hooks: {
      run,
    },
  } = config;
  const snaps = await run(config);
  console.log(`Uploading report for ${sha}...`);
  await uploadReport({
    snaps,
    sha,
    endpoint: viewerEndpoint,
    apiKey,
    apiSecret,
  });
}