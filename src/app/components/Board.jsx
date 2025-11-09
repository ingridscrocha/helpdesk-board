'use client';

import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import StatusMessage from './StatusMessage';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
  // scaffolds only; logic comes in Part 4
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); // { [id]: true }

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <StatusFilter value={filters.status} onChange={v => setFilters(f => ({ ...f, status: v }))} />
        <PriorityFilter value={filters.priority} onChange={v => setFilters(f => ({ ...f, priority: v }))} />
        <SearchBox value={search} onChange={setSearch} />
      </div>

      <StatusMessage loading={loading} error={error} isEmpty={!loading && !error && tickets.length === 0} />

      <TicketList
        tickets={tickets}
        queue={queue}
        onAddToQueue={id => setQueue(q => ({ ...q, [id]: true }))}
      />

      <MyQueueSummary
        tickets={tickets}
        queue={queue}
        onRemove={id => setQueue(q => { const n={...q}; delete n[id]; return n; })}
        onClear={() => setQueue({})}
      />
    </section>
  );
}