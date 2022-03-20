import adsSdk from 'facebook-nodejs-business-sdk'

const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;