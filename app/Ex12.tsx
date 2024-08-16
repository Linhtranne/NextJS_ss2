"use client"
import React, { useState } from 'react';
import moment from 'moment';
import { Button } from 'antd';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const startOfMonth = moment(selectedDate).startOf('month').startOf('week');
  const endOfMonth = moment(selectedDate).endOf('month').endOf('week');
  const currentDay = startOfMonth.clone().subtract(1, 'day');
  const daysArray = [];

  while (currentDay.isBefore(endOfMonth, 'day')) {
    daysArray.push(
      Array(7)
        .fill(0)
        .map(() => currentDay.add(1, 'day').clone())
    );
  }

  const handlePrevMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };

  const handleDateClick = (day: moment.Moment) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar-container" style={{ width: 300, padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Button onClick={handlePrevMonth}>«</Button>
        <h3>{selectedDate.format('MMMM YYYY')}</h3>
        <Button onClick={handleNextMonth}>»</Button>
      </div>
      <div className="days-of-week" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
        {moment.weekdaysShort().map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
        {daysArray.map((week, i) => (
          <React.Fragment key={i}>
            {week.map(day => (
              <div
                key={day.format('DD-MM-YYYY')}
                style={{
                  padding: 10,
                  background: day.isSame(selectedDate, 'day') ? '#1890ff' : '',
                  color: day.isSame(selectedDate, 'day') ? '#fff' : day.isSame(moment(), 'day') ? 'red' : '',
                  cursor: 'pointer',
                  borderRadius: 4,
                }}
                onClick={() => handleDateClick(day)}
              >
                {day.format('D')}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        <Button>Cancel</Button>
        <Button type="primary">Set date</Button>
      </div>
    </div>
  );
};

export default Calendar;
