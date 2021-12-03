import React, {useMemo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import {skipLoadingScreens} from '../../utils/constants';

const Loading = () => {
  const {loading, screenName} = useSelector(
    state => ({
      loading: state.loading,
      screenName: state.route.screenName,
    }),
    shallowEqual,
  );

  const isLoading = useMemo(() => {
    return (
      // 로딩 중 & 현재 스크린이 스킵 스크린이 아닐 경우
      Object.values(loading).includes(true) &&
      !skipLoadingScreens.includes(screenName)
    );
  }, [loading]);

  return isLoading && <LoadingSpinner />;
};

export default Loading;
