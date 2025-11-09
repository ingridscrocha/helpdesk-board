'use client';

export default function MyQueueSummary({ tickets = [], queue = {}, onRemove, onClear }) {
  const queued = tickets.filter(t => queue[t.id]);
  if (queued.length === 0) return null;

  return (
    <aside className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">My Queue ({queued.length})</h4>
        <button className="text-sm underline" onClick={onClear}>Clear Queue</button>
      </div>
      <ul className="space-y-2">
        {queued.map(t => (
          <li key={t.id} className="flex items-center justify-between">
            <span>{t.title}</span>
            <button className="text-sm underline" onClick={() => onRemove?.(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}