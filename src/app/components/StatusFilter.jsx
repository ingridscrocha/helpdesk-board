'use client';

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function StatusFilter({ value = 'All', onChange }) {
  return (
    <select
      className="w-full rounded-md border px-3 py-2 bg-neutral-900"
      value={value}
      onChange={e => onChange?.(e.target.value)}
      aria-label="Status filter"
    >
      {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}