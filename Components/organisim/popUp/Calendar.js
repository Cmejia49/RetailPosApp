import React, { useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Calendar = (props) => {

  return (
    <View>
      <DateTimePickerModal
        isVisible={props.visible}
        mode="date"
        onConfirm={props.onConfrim}
        onCancel={props.onCancel}
      />
    </View>
  );
};

export default Calendar;