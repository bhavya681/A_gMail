import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md max-w-screen-lg w-full">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }}
          height="auto"
          eventBackgroundColor="#3182CE"
          eventBorderColor="#3182CE"
          eventTextColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Calendar;
