import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import ruLocale from "@fullcalendar/core/locales/ru";
import { Row, Col } from "antd";

const Calendar = () => {
  return (
    <Row>
      <Col span={12} style={{ minHeight: "85vh", padding: "20px" }}>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          locale={ruLocale}
        />
      </Col>
      <Col span={12} style={{ minHeight: "85vh", padding: "20px" }}>
        <FullCalendar
          defaultView="listWeek"
          header={{
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          plugins={[listPlugin]}
          locale={ruLocale}
        />
      </Col>
    </Row>
  );
};

export default Calendar;
