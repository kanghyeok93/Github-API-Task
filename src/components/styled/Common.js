export const colors = {
  Theme: '#121232',
  LightWhite: '#fffef8',
};

// colors 적용 함수 프레임
const colorFrame = (props, keyword, defaultColor) => {
  const colorsKeys = Object.keys(colors);
  const propsKeys = Object.keys(props);

  const filter = colorsKeys.filter(data => {
    // props 로 받은 색상이 colors 에 존재하는지 검증
    if (propsKeys.includes(`${keyword}${data}`)) {
      // props 해당 컬러 value 값이 true 일 경우에만 colors 색상 반환
      return props[`${keyword}${data}`];
    }
  });
  return filter.length ? colors[filter[0]] : defaultColor;
};

// background color
export const BACKGROUND_COLOR = props => {
  return colorFrame(props, 'bg', 'transparent');
};

// border color
export const BORDER_COLOR = props => {
  return colorFrame(props, 'br', 'transparent');
};

// font color
export const FONT_COLOR = props => {
  return colorFrame(props, 'ft', '#000000');
};

// margin
export const MARGIN_TOP = props => {
  return props.marginTop || '0';
};
export const MARGIN_LEFT = props => {
  return props.marginLeft || '0';
};
export const MARGIN_RIGHT = props => {
  return props.marginRight || '0';
};
export const MARGIN_BOTTOM = props => {
  return props.marginBottom || '0';
};

// padding
export const PADDING_TOP = props => {
  return props.paddingTop || '0';
};
export const PADDING_LEFT = props => {
  return props.paddingLeft || '0';
};
export const PADDING_RIGHT = props => {
  return props.paddingRight || '0';
};
export const PADDING_BOTTOM = props => {
  return props.paddingBottom || '0';
};

// border width
export const BORDER_LEFT_WIDTH = props => {
  return props.borderLeftWidth || '1px';
};
export const BORDER_RIGHT_WIDTH = props => {
  return props.borderRightWidth || '1px';
};
export const BORDER_BOTTOM_WIDTH = props => {
  return props.borderBottomWidth || '1px';
};
export const BORDER_TOP_WIDTH = props => {
  return props.borderTopWidth || '1px';
};

// font
export const FONT_SIZE = props => {
  if (props.ftVerySmall) {
    return '9px';
  }
  if (props.ftSmall) {
    return '13px';
  }
  if (props.ftLarge) {
    return '18px';
  }
  if (props.ftBigLarge) {
    return '28px';
  }
  if (props.fontSize) {
    return props.fontSize;
  }
  return '15px';
};

export const FONT_WEIGHT = props => {
  if (props.bold) {
    return 'bold';
  }
  return 'normal';
};
