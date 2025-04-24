import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event as RBCEvent } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay, setMonth } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date()),
  getDay,
  locales,
});

interface CustomEvent extends RBCEvent {
  color: string;
}

// 🔹 Events categorized by month
const monthEvents: Record<number, CustomEvent[]> = {
    2: [
        { title: "Rapat Pleno", start: new Date(2025, 2, 7), end: new Date(2025, 2, 10), color: "#001F3F" },
        { title: "Donasi Darah", start: new Date(2025, 2, 14), end: new Date(2025, 2, 16), color: "#001F3F" },
        ],
};

const CustomToolbar = () => null;

const CustomCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [hoveredEvent, setHoveredEvent] = useState<CustomEvent | null>(null);

  const selectedDate = setMonth(new Date(), selectedMonth);

  const eventStyleGetter = (event: CustomEvent) => ({
    className: `px-2 py-1 rounded text-white ${event.color}`, 
    style: { backgroundColor: event.color, borderRadius: "8px", padding: "5px" }, // Inline styles
  });

  return (
    <div className="flex justify-center items-center flex-col pt-8 text-gray-500 relative px-4">
      <div className="flex justify-center mb-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className="px-4 py-2 bg-[#001F3F] text-white rounded-md"
        >
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ].map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-[100vh] h-[50vh] md:h-[70vh]">
        {hoveredEvent && (
            <div className="bg-[#001F3F] text-white px-4 py-4">
            <p>{hoveredEvent.title}</p>
            <p>{format(hoveredEvent.start as Date, "PPP")}</p>
            </div>
        )}
        <Calendar
          localizer={localizer}
          date={selectedDate} 
          events={monthEvents[selectedMonth] || []}
          startAccessor="start"
          endAccessor="end"
          className="w-full h-full"  
          eventPropGetter={(event) => eventStyleGetter(event as CustomEvent)}
          onSelectEvent={(event) => setHoveredEvent(event as CustomEvent)}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
