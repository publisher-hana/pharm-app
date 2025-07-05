import { useState } from 'react';
import { DateInput } from './form.style'
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

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