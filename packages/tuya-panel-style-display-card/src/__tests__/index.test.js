/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import renderer from 'react-test-renderer';
 import TuyaRNSvgs from 'tuya-panel-kit/lib/components/iconfont/svg/defaultSvg';
 import { ClassicDisplayCard, AcrylicDisplayCard, NordicDisplayCard } from '../index';
 
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
 
 describe('DisplayCard', () => {
   it('ClassicDisplayCard', () => {
     const wrapper = renderer
       .create(<ClassicDisplayCard backgroundColor="#FFF" />)
       .toJSON();
     expect(wrapper).toMatchSnapshot();
   });
   it('NordicDisplayCard', () => {
    const wrapper = renderer
    .create(<NordicDisplayCard icon={TuyaRNSvgs.power} />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
   })
   it('AcrylicDisplayCard', () => {
     const wrapper = renderer.create(<AcrylicDisplayCard />).toJSON();
     expect(wrapper).toMatchSnapshot();
   });
 });
 