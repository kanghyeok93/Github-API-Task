import styled from 'styled-components/native';
import withPreventDoubleClick from '../higherOrderComponents/withPreventDoubleClick';
import * as Common from './Common';

/*
  Button 내부에 View 컴포넌트를 쓰면 해당 영역 잡힌 부분은 터치가 안됨
  react-native-gesture-handler 로 만든 버튼 사용 필요
  GestureButton
*/

export const Button = withPreventDoubleClick(
  styled.TouchableOpacity(props => ({
    // size
    width: props.width || '100%',
    height: props.height,

    // borderStyle
    borderStyle: props.borderStyle,

    // color
    backgroundColor: Common.BACKGROUND_COLOR(props),

    // margin
    marginLeft: Common.MARGIN_LEFT(props),
    marginRight: Common.MARGIN_RIGHT(props),
    marginTop: Common.MARGIN_TOP(props),
    marginBottom: Common.MARGIN_BOTTOM(props),

    // padding
    paddingLeft: Common.PADDING_LEFT(props),
    paddingRight: Common.PADDING_RIGHT(props),
    paddingTop: Common.PADDING_TOP(props),
    paddingBottom: Common.PADDING_BOTTOM(props),

    // align
    alignItems: props.alignItems || 'center',
    justifyContent: props.justifyContent || 'center',
    alignSelf: props.alignSelf || 'stretch',
    flexDirection: props.flexDirection || 'row',
  })),
);

export const ButtonBorder = styled(Button)(props => ({
  borderWidth: props.borderWidth || '1px',
  borderColor: Common.BORDER_COLOR(props),
}));

export const ButtonBorderRadius = styled(ButtonBorder)(props => ({
  borderRadius: props.borderRadius || '5px',
}));
