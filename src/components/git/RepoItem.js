import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import * as modalActions from '../../store/modules/modal/actions';
import * as toastActions from '../../store/modules/toast/actions';
import {ButtonBorderRadius} from '../styled/Button';
import {Text} from '../styled/Text';
import {View, ViewBorderRadius, ViewRow} from '../styled/View';
import {getData, storeData} from '../../utils/functions';

const RepoItem = props => {
  const dispatch = useDispatch();

  const onPressOK = async () => {
    if (!JSON.parse(await getData('repo'))) {
      const param = [];
      param.push({
        value: props.name,
        label: props.name,
      });
      await storeData('repo', JSON.stringify(param));

      dispatch(toastActions.change_toast_message('등록 완료'));
    } else if (JSON.parse(await getData('repo')).length >= 4) {
      dispatch(toastActions.change_toast_message('최대 개수 초과'));
    } else {
      const param = JSON.parse(await getData('repo'));

      if (param.find(item => item.label === props.name)) {
        dispatch(toastActions.change_toast_message('이미 등록되어 있습니다.'));
      } else {
        param.push({
          value: props.name,
          label: props.name,
        });
        await storeData('repo', JSON.stringify(param));
        dispatch(toastActions.change_toast_message('등록 완료'));
      }
    }
  };

  const onPress = () => {
    dispatch(
      modalActions.change_modal_message('선택하신 저장소를 등록하시겠습니까?'),
    );
    dispatch(modalActions.change_modal_one_button(false));
    dispatch(modalActions.change_modal_on_press_ok(onPressOK));
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
            <Ionicons
              name="caret-forward-circle-outline"
              color="#3D58C0"
              size={20}
            />
          </ButtonBorderRadius>
        </View>
      </ViewRow>
    </ViewBorderRadius>
  );
};

export default RepoItem;
