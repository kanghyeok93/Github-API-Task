import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import Modal from 'react-native-modal';
import {View, ViewRow, ScrollView} from '../styled/View';
import {Text} from '../styled/Text';
import {Button} from '../styled/Button';
import * as modalActions from '../../store/modules/modal/actions';

const GlobalModal = () => {
  const dispatch = useDispatch();

  const {
    isVisible,
    isOneButton,
    message,
    elements,
    size,
    onPressOK,
    buttonHeight,
    scrollJustifyContent,
  } = useSelector(
    state => ({
      isVisible: state.modal.isVisible,
      isOneButton: state.modal.isOneButton,
      message: state.modal.message,
      elements: state.modal.elements,
      size: state.modal.size,
      onPressOK: state.modal.onPressOK,
      buttonHeight: state.modal.buttonHeight,
      scrollJustifyContent: state.modal.scrollJustifyContent,
    }),
    shallowEqual,
  );

  let converSize = '20%';

  if (size) {
    converSize = size;
  }

  const defaultScrollJustifyContent = scrollJustifyContent || {
    justifyContent: 'center',
  };

  const defaultBgColor = {bgWhite: true};
  const leftButtonColor = {bgLightGray: true};

  const onPressCancel = () => {
    dispatch(modalActions.reset_modal_state());
  };

  const onPress = () => {
    if (!onPressOK || typeof onPressOK !== 'function') {
      // 버튼 하나로 바뀌어서 내려가는 현상 수정(모달 내려가는 시간 대략 0.3초)
      setTimeout(() => {
        dispatch(modalActions.reset_modal_state());
      }, 300);
    } else {
      setTimeout(() => {
        dispatch(modalActions.reset_modal_state());
      }, 300);
      return onPressOK();
    }
  };

  const renderMessage = () => {
    if (typeof message === 'object') {
      return message;
    }
    return (
      <Text ftTheme textAlign="center">
        {message}
      </Text>
    );
  };
  const renderElements = () => {
    return <>{elements}</>;
  };

  return (
    <Modal isVisible={isVisible}>
      <View height={converSize} marginLeft={20} marginRight={20}>
        <ScrollView
          {...defaultBgColor}
          {...defaultScrollJustifyContent}
          alignItems="center">
          {renderMessage()}
          {renderElements()}
        </ScrollView>
        {isOneButton ? (
          <Button
            {...{activeOpacity: 0.9}}
            bgTheme
            paddingTop={10}
            paddingBottom={10}
            height={buttonHeight || 41}
            onPress={onPress}>
            <Text ftWhite>Confirm</Text>
          </Button>
        ) : (
          <View height={50} bgTheme>
            <ViewRow height="100%" width="100%">
              <Button
                height="100%"
                width="50%"
                {...leftButtonColor}
                onPress={onPressCancel}
                {...{activeOpacity: 0.9}}>
                <Text>취소</Text>
              </Button>
              <Button
                bgTheme
                height="100%"
                width="50%"
                onPress={onPress}
                {...{activeOpacity: 0.9}}>
                <Text ftWhite>확인</Text>
              </Button>
            </ViewRow>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default GlobalModal;
