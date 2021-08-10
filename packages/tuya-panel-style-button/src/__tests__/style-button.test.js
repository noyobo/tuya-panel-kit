/**
 * @jest-environment jsdom
 */
import React from 'react';
import { View, Dimensions } from 'react-native';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ClassicButton, NordicButton, AcrylicButton, PaintButton } from '../index';

const icon =
  'M512 0C794.760533 0 1024 229.239467 1024 512S794.760533 1024 512 1024 0 794.760533 0 512 229.239467 0 512 0z m185.048178 327.0656a26.988089 26.988089 0 0 0-38.183822 38.183822 207.712711 207.712711 0 1 1-293.728712 0 26.988089 26.988089 0 1 0-38.183822-38.183822c-102.172444 102.1952-102.172444 267.901156 0 370.096356 102.1952 102.172444 267.901156 102.172444 370.096356 0 102.172444-102.1952 102.172444-267.901156 0-370.096356zM511.886222 227.555556a27.079111 27.079111 0 0 0-26.919822 24.302933l-0.136533 2.776178v196.152889a27.079111 27.079111 0 0 0 53.998933 2.776177l0.136533-2.776177v-196.152889a27.079111 27.079111 0 0 0-27.079111-27.079111z';

jest.mock('react-native-gesture-handler', () => {
  return {
    BaseButton: () => 'BaseButton',
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    TransitionSpecs: {},
    HeaderStyleInterpolators: {},
    createStackNavigator: () => 'createStackNavigator',
  };
});

jest.mock('Dimensions', () => {
  return {
    get: jest.fn().mockReturnValue({ width: 375, height: 667 }),
  };
});

describe('StyleButton', () => {
  it('ClassicButton', () => {
    const wrapper = renderer
      .create(<ClassicButton icon={icon} text="开关" iconColor="#158CFB" />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('NordicButton', () => {
    const wrapper = renderer
      .create(
        <NordicButton icon={icon}>
          <View style={{ width: 25, height: 25, backgroundColor: '#ff0' }} />
        </NordicButton>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('AcrylicButton', () => {
    const wrapper = renderer.create(<AcrylicButton isSupportAcrylic={true} icon={icon} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('PaintButton', () => {
    const wrapper = mount(<PaintButton icon={icon} onLongPress={() => console.log('hh')} />);
    const touchable = wrapper
      .findWhere(c => c.name() === 'TouchableOpacity' && !!c.prop('onPressIn'))
      .at(0);

    touchable.props().onPressIn();
    touchable.props().onPressOut();
    expect(wrapper).toMatchSnapshot();
  });
});