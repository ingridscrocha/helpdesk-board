'use client';
import TicketCard from './TicketCard';

export default function TicketList({ tickets = [], queue = {}, onAddToQueue }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tickets.map(t => (
        <TicketCard
          key={t.id}
          ticket={t}
          inQueue={!!queue[t.id]}
          onAdd={() => onAddToQueue?.(t.id)}
        />
      ))}
    </div>
  );
}