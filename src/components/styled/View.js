import styled from 'styled-components/native';
import * as Common from './Common';

export const ScrollView = styled.ScrollView(props => ({
  flex: props.flex,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const SafeAreaView = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const CommonView = styled.View(props => ({
  flex: props.flex,
  flexWrap: props.flexWrap,
  // size
  width: props.width || 'auto',

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

  // zIndex
  zIndex: props.zIndex || 1,
}));

export const View = styled(CommonView)(props => ({
  height: props.height || 'auto',
  alignItems: props.alignItems || 'stretch',
  justifyContent: props.justifyContent || 'flex-start',
}));

export const ViewRow = styled(View)({
  flexDirection: 'row',
});

export const ViewAbsolute = styled(View)(props => ({
  position: 'absolute',
  alignSelf: props.alignSelf || 'flex-start',

  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
}));

export const ViewBorder = styled(View)(props => ({
  borderColor: Common.BORDER_COLOR(props),
  borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),
  borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
  borderTopWidth: Common.BORDER_TOP_WIDTH(props),
  borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),
}));

export const ViewRowBorder = styled(ViewBorder)({
  flexDirection: 'row',
});

export const ViewBorderRadius = styled(ViewBorder)(props => ({
  borderRadius: props.borderRadius || '5px',
}));

export const ViewRowBorderRadius = styled(ViewBorderRadius)({
  flexDirection: 'row',
});
