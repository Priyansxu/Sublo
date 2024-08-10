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
      <input
        type="color"
        value={value}
        onChange={handleChange}
        className="w-full h-10 p-2 border rounded-lg"
      />
    </div>
  );
}