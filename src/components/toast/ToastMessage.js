import React, {useRef, useEffect} from 'react';
import Toast from 'react-native-easy-toast';
import {useDispatch, useSelector} from 'react-redux';
import {ViewAbsolute} from '../styled/View';
import * as globalActions from '../../store/modules/toast/actions';

const ToastMessage = props => {
  const dispatch = useDispatch();
  // 토스트 메세지 참조 선언
  const toastRef = useRef(null);
  const toastMessage = useSelector(state => state.toast.toastMessage);

  useEffect(() => {
    if (toastMessage) {
      toastRef.current.show(toastMessage);
      dispatch(globalActions.change_toast_message(null));
    }
  }, [toastMessage]);

  return (
    <ViewAbsolute width="100%">
      <Toast
        position={props.position}
        ref={toastRef}
        fadeInDuration={750}
        fadeOutDuration={1000}
      />
    </ViewAbsolute>
  );
};

export default ToastMessage;
