import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {Text} from '../styled/Text';
import {ButtonBorderRadius} from '../styled/Button';
import {View, ViewBorderRadius, ViewRow} from '../styled/View';
import * as modalActions from '../../store/modules/modal/actions';

const RepoItem = props => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      modalActions.change_modal_message('선택하신 저장소를 등록하시겠습니까?'),
    );
    dispatch(modalActions.change_modal_one_button(false));
  };
  return (
    <ViewBorderRadius
      height={60}
      marginTop={15}
      paddingLeft={15}
      paddingRight={15}
      brBlack
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column">
      <ViewRow>
        <View flex={4} justifyContent="center">
          <Text bold>{props.name}</Text>
        </View>
        <View flex={1} justifyContent="center">
          <ButtonBorderRadius
            paddingTop={10}
            paddingBottom={10}
            onPress={onPress}>
            <Ionicons name="arrow-forward-outline" color="#3D58C0" size={20} />
          </ButtonBorderRadius>
        </View>
      </ViewRow>
    </ViewBorderRadius>
  );
};

export default RepoItem;
