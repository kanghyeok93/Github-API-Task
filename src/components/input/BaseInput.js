import React, {useEffect, useRef} from 'react';
import {View} from '../styled/View';
import {Text} from '../styled/Text';
import {InputBorderRadius} from '../styled/Input';
import {colors} from '../styled/Common';
import {isEmpty} from '../../utils/functions';

/*
InputBorderRadius props reference

height: 인풋 높이                       (number)
isOnlyNumber: 숫자 키패드만 활성화         (boolean)
keyboardType: 입력창 키보드 타입          ('default', 'numeric')
label: 라벨 값                         (string)
labelColor: 라벨 색상                   (string)
multiline: 여러줄 사용 여부              (boolean)
numberOfLines: 허용 라인 수             (number)
placeholder: 인풋 placeholder          (string)
placeholderTextColor: placeholder 색상 (string)
maxLength: 최대 입력 길이                (number)
*/

const BaseInput = props => {
  const height = props.height || 50;
  const keyboardType = isEmpty(props.isOnlyNumber) ? 'default' : 'numeric';
  const paddingLeft = props.paddingLeft || 10;
  const paddingRight = props.paddingRight || 10;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <View flex={1}>
      {props.label && (
        <Text ftSmall marginBottom={8} paddingLeft={25} {...props.labelColor}>
          {props.label}
        </Text>
      )}
      <View height={height}>
        <InputBorderRadius
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor || colors.White}
          keyboardType={keyboardType}
          maxLength={props.maxLength}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          ref={inputRef}
          {...props}
        />
      </View>
    </View>
  );
};

export default BaseInput;
