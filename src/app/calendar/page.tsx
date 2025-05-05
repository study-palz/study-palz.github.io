/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */

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
  const events: Event[] = [
    { id: 1, title: 'ICS 314 Study Group', start: new Date(), allDay: false },
    { id: 2, title: 'ICS 111 Review Session', start: new Date(), allDay: true },
  ];

  return (
    <>
      <Nav className="flex justify-between bg-white shadow-md mb-8 border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-gray-800">📅 Study Palz Calendar</h1>
      </Nav>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-9 bg-white rounded-2xl shadow-lg p-6">
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
              height="auto"
            />
          </div>

          <div className="col-span-12 md:col-span-3 bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">📌 Draggable Events</h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  id="draggable-element"
                  className="bg-indigo-600 text-white px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer"
                  key={event.id}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
