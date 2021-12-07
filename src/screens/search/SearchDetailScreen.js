import React, {useCallback, useEffect, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView, View, ViewRow} from '../../components/styled/View';
import {ButtonBorderRadius} from '../../components/styled/Button';
import {Text} from '../../components/styled/Text';
import BaseInput from '../../components/input/BaseInput';
import RepoItem from '../../components/git/RepoItem';
import * as gitActions from '../../store/modules/git/actions';
import * as toastActions from '../../store/modules/toast/actions';
import * as modalActions from '../../store/modules/modal/actions';
import {getData, storeData} from '../../utils/functions';

const SearchDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {repoList, totalCount, loading} = useSelector(
    state => ({
      repoList: state.git.repoList,
      totalCount: state.git.totalCount,
      loading: state.loading['git/GET_REPO_LIST'],
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
      dispatch(gitActions.change_repo_list([]));
      dispatch(gitActions.change_total_count(0));
    };
  }, []);

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onChangeRepoName = text => {
    setRepoName(text);
  };

  const onPress = () => {
    dispatch(gitActions.change_repo_list([]));
    setRepoListState([]);

    const param = {
      q: repoName,
      page: 1,
    };
    dispatch(gitActions.get_repo_list(param));
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      const param = {
        q: repoName,
        page: page + 1,
      };
      setPage(page + 1);

      if (repoList.length !== 0) {
        dispatch(gitActions.get_repo_list(param));
      }
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  const onPressOK = async name => {
    if (!JSON.parse(await getData('repo'))) {
      const param = [];
      param.push({
        value: name,
        label: name,
      });
      await storeData('repo', JSON.stringify(param));

      dispatch(toastActions.change_toast_message('등록 완료'));
    } else if (JSON.parse(await getData('repo')).length >= 4) {
      dispatch(toastActions.change_toast_message('최대 개수 초과'));
    } else {
      const param = JSON.parse(await getData('repo'));

      if (param.find(item => item.label === name)) {
        dispatch(toastActions.change_toast_message('이미 등록되어 있습니다.'));
      } else {
        param.push({
          value: name,
          label: name,
        });
        await storeData('repo', JSON.stringify(param));
        dispatch(toastActions.change_toast_message('등록 완료'));
      }
    }
  };

  const onPressRepoFavorite = name => {
    dispatch(
      modalActions.change_modal_message('선택하신 저장소를 등록하시겠습니까?'),
    );
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(() => onPressOK(name)));
  };

  const keyExtractor = useCallback((item, index) => index, []);
  const renderRepoList = useCallback(
    ({item}) => (
      <RepoItem
        name={item.full_name}
        onPressOK={() => onPressRepoFavorite(item.full_name)}
      />
    ),
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
