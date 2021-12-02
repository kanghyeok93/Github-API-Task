import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import withPreventDoubleClick from '../higherOrderComponents/withPreventDoubleClick';
import * as Common from './Common';

export const GestureButton = withPreventDoubleClick(
  styled(TouchableOpacity)(props => ({
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

export const GestureButtonBorder = styled(GestureButton)(props => ({
  borderWidth: props.borderWidth || '1px',
  borderColor: Common.BORDER_COLOR(props),
}));

export const GestureButtonBorderRadius = styled(GestureButtonBorder)(props => ({
  borderRadius: props.borderRadius || '5px',
}));
