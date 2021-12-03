import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../Routes';
import {headers, objToQueryString} from '../../utils/request';

export const getRepo = async keyword => {
  const method = 'GET';
  const url = ROUTES.GIT.SEARCH_REPO;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}?${objToQueryString(keyword)}`, headers());

  console.log('getRepo result ===> ', result.data);
  return JSON.parse(result.data);
};
