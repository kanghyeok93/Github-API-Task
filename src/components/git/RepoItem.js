import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, ViewBorderRadius, ViewRow} from '../styled/View';
import {ButtonBorderRadius} from '../styled/Button';
import {Text} from '../styled/Text';

const RepoItem = ({name, onPressOK}) => {
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
          <Text bold>{name}</Text>
        </View>
        <View flex={1} justifyContent="center">
          <ButtonBorderRadius
            paddingTop={10}
            paddingBottom={10}
            onPress={onPressOK}>
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

export default React.memo(RepoItem);
