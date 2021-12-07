import React, {useCallback, useEffect, useRef, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, Linking, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, View, ViewRow} from '../../components/styled/View';
import * as gitActions from '../../store/modules/git/actions';
import * as modalActions from '../../store/modules/modal/actions';
import IssueItem from '../../components/git/IssueItem';
import {Text} from '../../components/styled/Text';
import {Button} from '../../components/styled/Button';
import {getData, storeData} from '../../utils/functions';

const FavoriteScreen = () => {
  const dispatch = useDispatch();

  const {favoriteRepo, loading, repoIssueList} = useSelector(
    state => ({
      favoriteRepo: state.git.favoriteRepo,
      loading: state.loading['git/GET_REPO_ISSUE_LIST'],
      repoIssueList: state.git.repoIssueList,
    }),
    shallowEqual,
  );
  const [repoIssueListState, setRepoIssueListState] = useState([]);
  const [repoName, setRepoName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (repoIssueList) {
      setRepoIssueListState([...repoIssueListState, ...repoIssueList]);
    }
  }, [repoIssueList]);

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onValueChange = value => {
    setRepoIssueListState([]);
    dispatch(gitActions.change_repo_issue_list([]));
    setPage(1);

    const param = {
      repo: value,
      page: 1,
    };
    if (value) {
      setRepoName(value);
      dispatch(gitActions.get_repo_issue_list(param));
    }
  };

  const onPressOK = async () => {
    const data = JSON.parse(await getData('repo')).filter(
      repo => repo.label !== repoName,
    );
    await storeData('repo', JSON.stringify(data));
    dispatch(
      gitActions.change_favorite_repo(JSON.parse(await getData('repo'))),
    );
    setRepoName('');
  };

  const onPressFavoriteDelete = () => {
    dispatch(
      modalActions.change_modal_message('선택하신 저장소를 삭제하시겠습니까?'),
    );
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(onPressOK));
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      const param = {
        repo: repoName,
        page: page + 1,
      };
      setPage(page + 1);

      if (repoIssueList.length !== 0 && repoName) {
        dispatch(gitActions.get_repo_issue_list(param));
      }
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  const onPressDetail = detail => {
    Linking.openURL(detail);
  };

  const keyExtractor = useCallback((item, index) => index, []);
  const renderRepoIssueList = useCallback(
    ({item}) => (
      <IssueItem
        repo={repoName}
        title={item.title}
        onPressDetail={() => onPressDetail(item.html_url)}
      />
    ),
    [repoName],
  );

  return (
    <SafeAreaView bgWhite>
      <RNPickerSelect
        placeholder={{
          label: 'Select a Repository...',
          value: null,
          color: '#9EA0A4',
        }}
        items={favoriteRepo}
        onValueChange={onValueChange}
        value={repoName}
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: 'white',
          },
          iconContainer: {
            top: 10,
            right: 12,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Ionicons name="search" size={20} color="#FFFFFF" />;
        }}
      />
      <View paddingLeft={15} paddingRight={15} height="100%" flex={1}>
        {repoName ? (
          <ViewRow justifyContent="space-between">
            <View flex={1}>
              <Text ftLarge bold numberOfLines={1}>
                {repoName} Issue List
              </Text>
            </View>
            <Button width="auto" onPress={onPressFavoriteDelete} marginLeft={5}>
              <Text ftRed>즐겨찾기 삭제</Text>
            </Button>
          </ViewRow>
        ) : null}
        <FlatList
          disableVirtualization={false}
          data={repoIssueListState}
          renderItem={renderRepoIssueList}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#3D58C0',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#3D58C0',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default FavoriteScreen;
