import {StyleSheet, Platform} from 'react-native';

// https://facebookincubator.github.io/infima/docs/utilities/colors
export const Color = {
  // Primary
  primaryLightest: '#9abcf2',
  primaryLighter: '#72a1ed',
  primaryLight: '#538ce9',
  primary: '#3578e5',
  primaryDark: '#306cce',
  primaryDarker: '#2d66c3',
  primaryDarkest: '#2554a0',
  // Secondary
  secondaryLightest: '#f5f6f8',
  secondaryLighter: '#f1f2f5',
  secondaryLight: '#eef0f2',
  secondary: '#ebedf0',
  secondaryDark: '#d4d5d8',
  secondaryDarker: '#c8c9cc',
  secondaryDarkest: '#a4a6a8',
  // Success
  successLightest: '#80d280',
  successLighter: '#4dbf4d',
  successLight: '#26b226',
  success: '#00a400',
  successDark: '#009400',
  successDarker: '#008b00',
  successDarkest: '#007300',
  // Info
  infoLightest: '#aae3f6',
  infoLighter: '#87d8f2',
  infoLight: '#6ecfef',
  info: '#54c7ec',
  infoDark: '#4cb3d4',
  infoDarker: '#47a9c9',
  infoDarkest: '#3b8ba5',
  // Warning
  warningLightest: '#ffdd80',
  warningLighter: '#ffcf4d',
  warningLight: '#ffc426',
  warning: '#ffba00',
  warningDark: '#e6a700',
  warningDarker: '#d99e00',
  warningDarkest: '#b38200',
  // Danger
  dangerLightest: '#fd9c9f',
  dangerLighter: '#fb7478',
  dangerLight: '#fb565b',
  danger: '#fa383e',
  dangerDark: '#e13238',
  dangerDarker: '#d53035',
  dangerDarkest: '#af272b',
};

export const el = StyleSheet.create({
  fab: {
    margin: 8,
    right: 0,
    bottom: 0,
    width: 65,
    height: 65,
    zIndex: 10,
    elevation: 5,
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Color.primary,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 999,
  },
  hr: {
    marginVertical: 5,
    borderColor: '#eee',
    borderStyle: 'dotted',
    borderTopWidth: 1.5,
  },
  modal: {
    width: '90%',
    elevation: 5,
    borderRadius: 4,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
});

// Button
export const btn = StyleSheet.create({
  base: {
    borderRadius: 4,
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

// Background Color
export const bg = StyleSheet.create({
  primary: {backgroundColor: Color.primary},
  secondary: {backgroundColor: Color.secondary},
  success: {backgroundColor: Color.success},
  info: {backgroundColor: Color.info},
  warning: {backgroundColor: Color.warning},
  danger: {backgroundColor: Color.danger},
  background: {backgroundColor: '#f9f9fa'},
});

// Flexbox
export const flex = StyleSheet.create({
  // Miscellaneous
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Flex
  one: {flex: 1},
  // Flex Direction
  row: {flexDirection: 'row'},
  col: {flexDirection: 'column'},
  rowReverse: {flexDirection: 'row-reverse'},
  colReverse: {flexDirection: 'column-reverse'},
  // Flex Wrap
  wrap: {flexWrap: 'wrap'},
  nowrap: {flexWrap: 'nowrap'},
  wrapReverse: {flexWrap: 'wrap-reverse'},
  // Flex Grow
  grow0: {flexGrow: 0},
  grow1: {flexGrow: 1},
  // Flex Shrink
  shrink0: {flexShrink: 0},
  shrink1: {flexShrink: 1},
  // Justify Content
  justifyEnd: {justifyContent: 'flex-end'},
  justifyCenter: {justifyContent: 'center'},
  justifyAround: {justifyContent: 'space-around'},
  justifyEvenly: {justifyContent: 'space-evenly'},
  justifyBetween: {justifyContent: 'space-between'},
  // Align Items
  itemsEnd: {alignItems: 'flex-end'},
  itemsCenter: {alignItems: 'center'},
  itemsStart: {alignItems: 'flex-start'},
  itemsBaseline: {alignItems: 'baseline'},
  // Align Self
  selfEnd: {alignSelf: 'flex-end'},
  selfStart: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  selfStretch: {alignSelf: 'stretch'},
  selfBaseline: {alignSelf: 'baseline'},
  // Align Content
  contentEnd: {alignContent: 'flex-end'},
  contentCenter: {alignContent: 'center'},
  contentStretch: {alignContent: 'stretch'},
  contentStart: {alignContent: 'flex-start'},
  contentAround: {alignContent: 'space-around'},
  contentBetween: {alignContent: 'space-between'},
});

// Alert
export const alert = StyleSheet.create({
  base: {
    borderRadius: 4,
    marginVertical: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  close: {
    fontSize: 17,
    color: '#333',
    fontWeight: 'bold',
  },
});

// Space
export const space = StyleSheet.create({
  // Width
  w10: {width: '10%'},
  w15: {width: '15%'},
  w25: {width: '25%'},
  w35: {width: '35%'},
  w45: {width: '45%'},
  w50: {width: '50%'},
  w55: {width: '55%'},
  w65: {width: '65%'},
  w75: {width: '75%'},
  w85: {width: '85%'},
  w95: {width: '95%'},
  wFull: {width: '100%'},
  // Height
  h10: {height: '10%'},
  h15: {height: '15%'},
  h25: {height: '25%'},
  h35: {height: '35%'},
  h45: {height: '45%'},
  h50: {height: '50%'},
  h55: {height: '55%'},
  h65: {height: '65%'},
  h75: {height: '75%'},
  h85: {height: '85%'},
  h95: {height: '95%'},
  hFull: {height: '100%'},
  // Margin
  m0: {margin: 0},
  m1: {margin: 2},
  m2: {margin: 4},
  m3: {margin: 6},
  m4: {margin: 8},
  m5: {margin: 10},
  // Margin Horizontal
  mx0: {marginHorizontal: 0},
  mx1: {marginHorizontal: 2},
  mx2: {marginHorizontal: 4},
  mx3: {marginHorizontal: 6},
  mx4: {marginHorizontal: 8},
  mx5: {marginHorizontal: 10},
  // Margin Vertical
  my0: {marginVertical: 0},
  my1: {marginVertical: 2},
  my2: {marginVertical: 4},
  my3: {marginVertical: 6},
  my4: {marginVertical: 8},
  my5: {marginVertical: 10},
  // Margin Top
  mt0: {marginTop: 0},
  mt1: {marginTop: 2},
  mt2: {marginTop: 4},
  mt3: {marginTop: 6},
  mt4: {marginTop: 8},
  mt5: {marginTop: 10},
  // Margin Bottom
  mb0: {marginBottom: 0},
  mb1: {marginBottom: 2},
  mb2: {marginBottom: 4},
  mb3: {marginBottom: 6},
  mb4: {marginBottom: 8},
  mb5: {marginBottom: 10},
  // Padding
  p0: {padding: 0},
  p1: {padding: 2},
  p2: {padding: 4},
  p3: {padding: 8},
  p4: {padding: 15},
  p5: {padding: 15},
  // Padding Horizontal
  px0: {paddingHorizontal: 0},
  px1: {paddingHorizontal: 2},
  px2: {paddingHorizontal: 4},
  px3: {paddingHorizontal: 6},
  px4: {paddingHorizontal: 8},
  px5: {paddingHorizontal: 10},
  // Padding Vertical
  py0: {paddingVertical: 0},
  py1: {paddingVertical: 2},
  py2: {paddingVertical: 4},
  py3: {paddingVertical: 6},
  py4: {paddingVertical: 8},
  py5: {paddingVertical: 10},
  // Padding Top
  pt0: {paddingTop: 0},
  pt1: {paddingTop: 2},
  pt2: {paddingTop: 4},
  pt3: {paddingTop: 6},
  pt4: {paddingTop: 8},
  pt5: {paddingTop: 10},
  // Padding Bottom
  pb0: {paddingBottom: 0},
  pb1: {paddingBottom: 2},
  pb2: {paddingBottom: 4},
  pb3: {paddingBottom: 6},
  pb4: {paddingBottom: 8},
  pb5: {paddingBottom: 10},
  // Others
  tabIcon: {
    height: 25,
    width: 25,
  },
});

// Border
export const border = StyleSheet.create({
  primary: {borderWidth: 1.5, borderColor: Color.primary},
  secondary: {borderWidth: 1.5, borderColor: Color.secondary},
  success: {borderWidth: 1.5, borderColor: Color.success},
  info: {borderWidth: 1.5, borderColor: Color.info},
  warning: {borderWidth: 1.5, borderColor: Color.warning},
  danger: {borderWidth: 1.5, borderColor: Color.danger},
  // Style
  dashed: {borderStyle: 'dashed'},
  // Radius
  rounded: {borderRadius: 4},
  rounded1: {borderRadius: 7},
  rounded2: {borderRadius: 10},
  rounded3: {borderRadius: 15},
  roundedFull: {borderRadius: 999},
});

// Form elements
export const form = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
});

// Card
export const card = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#eee',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

// Lists
export const list = StyleSheet.create({
  row: {
    borderWidth: 1,
    paddingTop: 10,
    borderRadius: 4,
    marginBottom: 5,
    paddingBottom: 7,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  center: {
    flex: 1,
  },
  left: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 999,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  right: {},
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    paddingTop: 5,
    color: '#444',
  },
});

// Shadows
export const shadow = StyleSheet.create({
  sm: {
    shadowColor: '#333',
    ...Platform.select({
      default: {
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 12,
        shadowOpacity: 0.06,
      },
      android: {elevation: 1},
    }),
  },
  md: {},
  lg: {},
});

// Texts
export const text = StyleSheet.create({
  // Font Size
  h1: {fontSize: 28},
  h2: {fontSize: 26},
  h3: {fontSize: 24},
  h4: {fontSize: 22},
  h5: {fontSize: 20},
  h6: {fontSize: 18},
  p: {fontSize: 16},
  // Font Familly
  monospace: {
    ...Platform.select({
      ios: {fontFamily: 'Menlo'},
      default: {fontFamily: 'monospace'},
    }),
  },
  // Miscellaneous
  bold: {fontWeight: 'bold'},
  upper: {textTransform: 'uppercase'},
  btn: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B224E',
    textTransform: 'uppercase',
  },
  // Text Colors
  black: {color: '#000'},
  white: {color: '#fff'},
  primary: {color: Color.primary},
  success: {color: Color.success},
  info: {color: Color.info},
  warning: {color: Color.warning},
  danger: {color: Color.danger},
});
