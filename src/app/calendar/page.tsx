/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */

'use client';

import { Nav } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: string;
}

const Home = () => {
  const events: Event[] = [
    {
      title: 'Study Group - ICS 311',
      start: '2025-05-10T10:00:00',
      allDay: false,
      id: '1',
    },
    {
      title: 'Meeting with Mentor',
      start: '2025-05-12T14:00:00',
      allDay: false,
      id: '2',
    },
    // Add more events here
  ];

  return (
    <>
      <Nav className="flex justify-between bg-light mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-lg text-light-700">Calendar</h1>
      </Nav>
      <main>
        <div className="grid grid-cols-12 gap-6 px-4">
          <div className="col-span-12 md:col-span-8">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              events={events}
              editable
              selectable
              droppable
              selectMirror
              dayMaxEvents
              weekends
              initialDate={new Date()}
              eventClick={(info) => alert(`Event: ${info.event.title}`)}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h2 className="font-semibold text-lg mb-4">Event Details</h2>
              <p>Select an event to view its details here.</p>
              {/* Placeholder for event details */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
