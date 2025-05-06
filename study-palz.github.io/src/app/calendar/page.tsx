'use client';

import { Nav } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

/** The Home page. */
interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

const Home = () => {
  const events: Event[] = []; // Empty events array

  return (
    <>
      <Nav className="flex justify-between bg-light mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </Nav>
      <main>
        <div className="grid grid-cols-10 bg-light">
          <div className="col-span-8">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              events={[]} // Keep it empty for now
              editable
              selectable
              droppable
              selectMirror
              dayMaxEvents
              weekends
              initialDate={new Date()}
              // drop={} // If you need drag & drop functionality, you can enable it here
            />
            {Array.isArray(events) && events.length === 0 && (
              <div className="mt-4 text-center text-gray-500">No events scheduled yet.</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
