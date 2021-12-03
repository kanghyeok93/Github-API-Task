import React, {useEffect, useState} from 'react';
// Modules
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component
import {SafeAreaView, ViewRow} from '../components/styled/View';
import BaseInput from '../components/input/BaseInput';
import {ButtonBorderRadius} from '../components/styled/Button';
// Redux
import * as gitActions from '../store/modules/git/actions';

const SearchDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [repoName, setRepoName] = useState('');

  const onChangeRepoName = text => {
    setRepoName(text);
  };

  const onPress = () => {
    const param = {
      q: repoName,
    };
    dispatch(gitActions.get_repo(param));
  };
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
          placeholder="GitHub Repository Search..."
          placeholderTextColor="#bcbfcf"
          onChangeText={onChangeRepoName}
          onSubmitEditing={onPress}
        />
      </ViewRow>
    </SafeAreaView>
  );
};

export default SearchDetailScreen;
