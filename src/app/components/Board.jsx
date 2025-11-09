'use client';

import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import StatusMessage from './StatusMessage';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
  // -------- State (lifted in parent) --------
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); // { [ticketId]: true }

  // -------- Effect #1: Fetch tickets on mount --------
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/tickets', { cache: 'no-store' });
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        if (!cancelled) setTickets(data);
      } catch (e) {
        if (!cancelled) setError('Unable to load tickets.');
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true; // cleanup
    };
  }, []);

  // -------- Effect #2: Simulate live updates (6–10s) --------
  useEffect(() => {
    if (tickets.length === 0) return;

    const STATUSES = ['Open', 'In Progress', 'On Hold', 'Resolved'];
    const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

    const nextOf = (arr, current) => {
      const i = Math.max(0, arr.indexOf(current));
      return arr[(i + 1) % arr.length];
    };

    const randMs = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let timerId;
    const schedule = () => {
      timerId = setTimeout(() => {
        setTickets(prev => {
          if (prev.length === 0) return prev;

          const idx = Math.floor(Math.random() * prev.length);
          const t = prev[idx];

          const flipStatus = Math.random() < 0.5;
          const updated = {
            ...t,
            updatedAt: new Date().toISOString(),
            ...(flipStatus
              ? { status: nextOf(STATUSES, t.status) }
              : { priority: nextOf(PRIORITIES, t.priority) }),
          };

          const copy = prev.slice();
          copy[idx] = updated;
          return copy;
        });

        schedule(); // schedule next tick
      }, randMs(6000, 10000)); // 6–10 seconds
    };

    schedule();
    return () => clearTimeout(timerId); // cleanup
  }, [tickets.length]);

  // -------- Derived: visible tickets from filters + search --------
  const visibleTickets = tickets.filter(t => {
    const byStatus = filters.status === 'All' ? true : t.status === filters.status;
    const byPriority = filters.priority === 'All' ? true : t.priority === filters.priority;

    const q = (search || '').trim().toLowerCase();
    const bySearch =
      q === ''
        ? true
        : (t.title || '').toLowerCase().includes(q) ||
          (t.description || '').toLowerCase().includes(q);

    return byStatus && byPriority && bySearch;
  });

  // -------- Handlers --------
  const handleAddToQueue = (id) => {
    setQueue(q => (q[id] ? q : { ...q, [id]: true }));
  };

  const handleRemoveFromQueue = (id) => {
    setQueue(q => {
      const next = { ...q };
      delete next[id];
      return next;
    });
  };

  const handleClearQueue = () => setQueue({});

  // -------- Render --------
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <StatusFilter
          value={filters.status}
          onChange={(v) => setFilters(f => ({ ...f, status: v }))}
        />
        <PriorityFilter
          value={filters.priority}
          onChange={(v) => setFilters(f => ({ ...f, priority: v }))}
        />
        <SearchBox value={search} onChange={setSearch} />
      </div>

      <StatusMessage
        loading={loading}
        error={error}
        isEmpty={!loading && !error && visibleTickets.length === 0}
      />

      <TicketList
        tickets={visibleTickets}
        queue={queue}
        onAddToQueue={handleAddToQueue}
      />

      <MyQueueSummary
        tickets={tickets}
        queue={queue}
        onRemove={handleRemoveFromQueue}
        onClear={handleClearQueue}
      />
    </section>
  );
}