import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

// color: 스피너 색상                       (string)
// animation: none, slide, fade          (string)
// size: 스피너 크기 (small, normal, large) (string)
// textContent: 스피너 아래 텍스트            (string)
// textStyle: 스피너 아래 텍스트 스타일        (object)
// visible: 스피너 SHOW / HIDDEN          (boolean)

const LoadingSpinner = props => {
  const color = props.color || 'white';
  const animation = props.animation || 'none';
  const size = props.size || 'large';
  const textContent = props.textContent || '';
  const textStyle = props.textStyle || {};
  const visible = props.visible || true;

  return (
    <Spinner
      color={color}
      animation={animation}
      size={size}
      textContent={textContent}
      textStyle={textStyle}
      visible={visible}
    />
  );
};

export default LoadingSpinner;
