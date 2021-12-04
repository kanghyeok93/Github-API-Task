import React, {useCallback, useEffect, useRef, useState} from 'react';
// Modules
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component
import {ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView, View, ViewRow} from '../components/styled/View';
import {ButtonBorderRadius} from '../components/styled/Button';
import {Text} from '../components/styled/Text';
import BaseInput from '../components/input/BaseInput';
import RepoItem from '../components/git/RepoItem';
// Redux
import * as gitActions from '../store/modules/git/actions';

const SearchDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {repoList, totalCount, loading} = useSelector(
    state => ({
      repoList: state.git.repoList,
      totalCount: state.git.totalCount,
      loading: state.loading['git/GET_REPO'],
    }),
    shallowEqual,
  );
  const [repoName, setRepoName] = useState('');
  const [repoListState, setRepoListState] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (repoList) {
      setRepoListState([...repoListState, ...repoList]);
    }
  }, [repoList]);

  useEffect(() => {
    return () => {
      dispatch(gitActions.change_repo([]));
      dispatch(gitActions.change_total_count(0));
    };
  }, []);

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onChangeRepoName = text => {
    setRepoName(text);
  };

  const onPress = () => {
    dispatch(gitActions.change_repo([]));
    setRepoListState([]);

    const param = {
      q: repoName,
      page: 1,
    };
    dispatch(gitActions.get_repo(param));
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      const param = {
        q: repoName,
        page: page + 1,
      };
      setPage(page + 1);

      if (repoList.length !== 0) {
        dispatch(gitActions.get_repo(param));
      }
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  const keyExtractor = useCallback((item, index) => index, []);
  const renderRepoList = useCallback(
    ({item}) => <RepoItem name={item.full_name} />,
    [],
  );

  return (
    <SafeAreaView bgWhite>
      <ViewRow bgTheme paddingLeft={10}>
        <ButtonBorderRadius width="auto" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#FFFFFF" size={20} />
        </ButtonBorderRadius>
        <BaseInput
          ftWhite
          height={50}
          value={repoName}
          autoFocus
          placeholder="ex) user/repository"
          placeholderTextColor="#bcbfcf"
          onChangeText={onChangeRepoName}
          onSubmitEditing={onPress}
        />
      </ViewRow>
      <View paddingLeft={15} paddingRight={15} height="100%" flex={1}>
        {totalCount ? (
          <Text bold marginTop={10}>
            Total - {totalCount}
          </Text>
        ) : null}
        <FlatList
          disableVirtualization={false}
          data={repoListState}
          renderItem={renderRepoList}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          keyExtractor={keyExtractor}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum.current = false;
          }}
          ListFooterComponent={
            loading && <ActivityIndicator size="large" color="#3D58C0" />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchDetailScreen;
