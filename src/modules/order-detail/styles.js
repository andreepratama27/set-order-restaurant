import {Colors} from 'styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  content: {
    backgroundColor: Colors.light,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 80,
  },
  avatar: {
    borderRadius: 80,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  listWrapper: {
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  menu: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  fullWidth: {
    width: '100%',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  noPadding: {
    paddingBottom: 0,
  },
  bottomWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  notification: {
    height: 100,
  },
  notificationBadge: {
    marginTop: 10,
    backgroundColor: Colors.light,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
  },
});

export default styles;
