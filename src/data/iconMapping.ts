import Icon from 'react-native-vector-icons/MaterialIcons';

export type IconKey =
  | 'home'
  | 'news'
  | 'about-cci'
  | 'new-employees'
  | 'infor-central'
  | 'my-cci'
  | 'engagements'
  | 'contact-us'
  | 'canteen'
  | 'virgin'
  | 'slate'
  | 'off-cn'
  | 'sage-ess'
  | 'colt-gpt'
  | 'stio-petar';

export const iconMapping: Record<IconKey, string> = {
  'home': 'home',
  'news': 'article',
  'about-cci': 'info',
  'new-employees': 'group-add',
  'infor-central': 'analytics',
  'my-cci': 'person',
  'engagements': 'chat',
  'contact-us': 'contact-support',
  'canteen': 'restaurant',
  'virgin': 'star',
  'slate': 'list-alt',
  'off-cn': 'public',
  'sage-ess': 'work',
  'colt-gpt': 'smart-toy',
  'stio-petar': 'business',
};
