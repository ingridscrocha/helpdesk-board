'use client';

export default function TicketCard({ ticket, inQueue, onAdd }) {
  if (!ticket) return null;
  const { title, priority, status, assignee, updatedAt } = ticket;

  return (
    <article className="border rounded-lg p-4 bg-neutral-900 text-neutral-100">
      <div className="text-sm mb-1">
        Priority: <b>{priority}</b>
      </div>
      <div className="text-sm mb-2">
        Status: <b>{status}</b>
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="text-sm opacity-80">
        Assignee: {assignee || 'Unassigned'}
      </div>
      <div className="text-xs opacity-60 mb-3">Updated: {updatedAt}</div>

      <button
        disabled={inQueue}
        onClick={onAdd}
        className="w-full rounded-md px-3 py-2 bg-blue-600 disabled:opacity-50"
      >
        {inQueue ? 'Already in Queue' : 'Add to My Queue'}
      </button>

      {inQueue && (
        <p className="text-xs mt-1 opacity-70">
          This ticket is already in your queue.
        </p>
      )}
    </article>
  );
}