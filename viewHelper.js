import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on design
const guidelineBaseWidth = 1080
const guidelineBaseHeight = 1920

console.log(height)

export const scale = size => (width / guidelineBaseWidth * size)
export const verticalScale = size => (height / guidelineBaseHeight * size)

export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height

export const HIT_SLOP = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 20
}
