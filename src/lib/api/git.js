import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../Routes';
import {headers, objToQueryString} from '../../utils/request';

export const getRepoList = async keyword => {
  const method = 'GET';
  const url = ROUTES.GIT.SEARCH_REPO;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}?${objToQueryString(keyword)}`, headers());

  return JSON.parse(result.data);
};

export const getRepoIssueList = async ({repo, page}) => {
  const method = 'GET';
  const url = ROUTES.GIT.REPO;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}/${repo}/issues?page=${page}`, headers());

  return JSON.parse(result.data);
};
