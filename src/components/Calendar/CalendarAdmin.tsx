import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarAdmin = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={setValue} value={value} className="bg-white" />
    </div>
  );
};

export default CalendarAdmin;
