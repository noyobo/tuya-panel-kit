import React from 'react';
import { View } from 'react-native';
import {
  ClassicDisplayCard,
  NordicDisplayCard,
  AcrylicDisplayCard,
} from 'tuya-panel-style-display-card';
import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';
import { ListView } from '#components';
import Strings from '#i18n';

export default () => {
  return (
    <ListView
      style={{ backgroundColor: '#f8f8f8' }}
      list={[
        {
          title: Strings.getLang('basic'),
          content: (
            <View>
              <ClassicDisplayCard isAlignCenter />
              <ClassicDisplayCard backgroundColor="#FFF" icon={TuyaRNSvgs.power} />
            </View>
          ),
        },
        {
          title: Strings.getLang('scandinavian'),
          content: <NordicDisplayCard icon={TuyaRNSvgs.power} />,
        },
        {
          title: Strings.getLang('acrylic'),
          content: <AcrylicDisplayCard />,
        },
      ]}
    />
  );
};