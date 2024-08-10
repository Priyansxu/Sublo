import { useCallback } from 'react';

export default function ColorSelector({ label, value, onChange }) {
  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    if (newValue.startsWith('#')) {
      onChange(newValue);
    }
  }, [onChange]);

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">
        {label}
      </label>
      <div className="