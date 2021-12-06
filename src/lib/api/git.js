import RNFetchBlob from 'rn-fetch-blob';
import ROUTES from '../../Routes';
import {headers, objToQueryString} from '../../utils/request';

export const getRepo = async keyword => {
  const method = 'GET';
  const url = ROUTES.GIT.SEARCH_REPO;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}?${objToQueryString(keyword)}`, headers());

  return JSON.parse(result.data);
};

export const getRepoIssue = async ({repo, page}) => {
  const method = 'GET';
  const url = ROUTES.GIT.REPO_ISSUE;

  const result = await RNFetchBlob.config({
    trusty: true,
  }).fetch(method, `${url}/${repo}/issues?page=${page}`, headers());

  return JSON.parse(result.data);
};
