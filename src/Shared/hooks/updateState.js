// src/Shared/hooks/useUpdateState.js
export default function useUpdateState(setFormData) {
  return function updateState(e) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };
}
