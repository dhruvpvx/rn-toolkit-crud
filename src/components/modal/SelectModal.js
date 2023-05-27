import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import AppModal from './AppModal';
import { Colors, Fonts } from '../../assets';

const SelectModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(props.value || '');
  const toRender = useMemo(() => {
    return props?.items?.length > 0
      ? props.items.map((i) => ({
          label: i,
          key: i.toLowerCase(),
        }))
      : [];
  }, [props.items]);

  const item = toRender.find((item) => item.key === selected);

  const selectedTitle = item?.label || props.placeholder;

  const title = 'Select ' + props.placeholder;

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={styles.selectButton}
    >
      <Text style={styles.selectText(selected)}>{selectedTitle}</Text>
      <AppModal
        style={styles.modalStyle}
        visible={visible}
        close={() => setVisible(false)}
      >
        <View style={styles.bottomSheet}>
          <View style={styles.title}>
            <Text style={Fonts.semiBold(22)}>{title}</Text>
          </View>
          {toRender.map((item) => {
            const active = item.key === selected;
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  setSelected(item.key);
                  setVisible(false);
                  props.onChange(item.key);
                }}
                style={[styles.selectButton, styles.selectItem(active)]}
              >
                <Text style={Fonts.semiBold(active ? 16 : 14)}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </AppModal>
    </TouchableOpacity>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  selectButton: {
    width: '88%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  selectText: (selected) => ({
    ...Fonts.medium(14),
    color: selected ? Colors.BLACK : Colors.PLACE_HOLDER_COLOR,
  }),
  bottomSheet: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalStyle: {
    justifyContent: 'flex-end',
  },
  selectItem: (active) => ({
    alignSelf: 'center',
    height: 45,
    borderColor: active ? Colors.BLUE : Colors.BORDER_COLOR,
  }),
  title: {
    width: '100%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
