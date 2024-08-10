import { useCallback } from 'react';

export default function SizeSelector({ label, value, onChange }) {
  const handleChange = useCallback((e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  }, [onChange]);

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="w-full h-10 p-2 border rounded-lg"
        min={10}
        max={100}
      />
    </div>
  );
}