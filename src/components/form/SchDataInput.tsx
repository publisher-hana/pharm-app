import { useState } from 'react';
import { DateInput } from './form.style'
import DatePicker from "react-date-picker";
import { Value } from "../../utils";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function SchDataInput() {
  const [value, onChange] = useState<Value>(new Date());
  return (
      <>
        <DateInput>
          <DatePicker 
          onChange={onChange} 
          value={value} 
          clearIcon={null}
          calendarProps={{
            formatDay: (_, date) => `${date.getDate()}`,
          }}
        />
        -
         <DatePicker 
            onChange={onChange} 
            value={value} 
            clearIcon={null}
            calendarProps={{
              formatDay: (_, date) => `${date.getDate()}`,
            }}
          />
        </DateInput>
      </>
  )
}

export default SchDataInput