'use client';

export default function SearchBox({ value = '', onChange }) {
  return (
    <input
      className="w-full rounded-md border px-3 py-2 bg-neutral-900"
      type="text"
      placeholder="Search title or description"
      value={value}
      onChange={e => onChange?.(e.target.value)}
    />
  );
}