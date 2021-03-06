import React from 'react';
import {View, ViewBorderRadius, ViewRow} from '../styled/View';
import {Text} from '../styled/Text';
import {ButtonBorderRadius} from '../styled/Button';

const IssueItem = ({repo, title, onPressDetail}) => {
  return (
    <ViewBorderRadius
      marginTop={15}
      paddingLeft={15}
      paddingRight={15}
      brBlack
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column">
      <View>
        <Text bold ftTheme marginTop={10}>
          {repo}
        </Text>
      </View>
      <ViewRow justifyContent="space-between">
        <View flex={4}>
          <Text bold numberOfLines={1} marginBottom={10}>
            {title}
          </Text>
        </View>
        <View flex={1} alignItems="flex-end" marginLeft={5}>
          <ButtonBorderRadius brTheme onPress={onPressDetail}>
            <Text ftTheme>Details</Text>
          </ButtonBorderRadius>
        </View>
      </ViewRow>
    </ViewBorderRadius>
  );
};

export default React.memo(IssueItem);
