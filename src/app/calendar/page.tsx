'use client'

import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventInput } from '@fullcalendar/core'
import { useRouter } from 'next/navigation'

const CalendarPage = () => {
  const [events, setEvents] = useState<EventInput[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/calendar/sessions')
        if (res.ok) {
          const data = await res.json()
          const formatted: EventInput[] = data.map((event: any) => {
            const courseCode = event.title?.split(':')[0]?.trim() ?? 'Unknown'
            return {
              id: event.id.toString(),
              title: event.title,
              start: event.start, // ISO string (do not convert to Date)
              end: event.end,
              allDay: event.allDay,
              extendedProps: {
                code: courseCode,
              },
            }
          })
          setEvents(formatted)
        } else {
          console.error('Failed to fetch events')
        }
      } catch (err) {
        console.error('Error loading calendar sessions:', err)
      }
    }

    fetchEvents()
  }, [])

  const handleEventClick = (info: any) => {
    const code = info.event.extendedProps.code
    const sessionId = info.event.id
    if (code && sessionId) {
      router.push(`/courses/${encodeURIComponent(code)}/sessions/${sessionId}/confirmation`)
    }
  }

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
              timeZone="local"
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              events={events}
              eventClick={handleEventClick}
              editable
              selectable
              droppable
              selectMirror
              dayMaxEvents
              weekends
              initialDate={new Date()}
            />
            {events.length === 0 && (
              <div className="mt-4 text-center text-gray-500">No events scheduled yet.</div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default CalendarPage
