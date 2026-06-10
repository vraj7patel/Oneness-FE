import React from 'react';
import Hero from './Hero';
import TicketsSection1 from './Ticketsection1';

export default function TicketsPage() {
  return (
    <div className="tickets-page-wrapper">
      <Hero />
      <TicketsSection1 />
    </div>
  );
}
