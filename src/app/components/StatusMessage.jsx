'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  const msg =
    loading ? 'Loading…' :
    error ? 'Unable to load tickets.' :
    isEmpty ? 'No tickets match your filters.' :
    '';

  if (!msg) return null;
  return <div className="p-3 rounded-md bg-neutral-800">{msg}</div>;
}