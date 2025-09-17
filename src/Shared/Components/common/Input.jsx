export default function Input({ title, ...props }) {
  return (
    <>
      <label>
        {title ?? "Null"}
        :&nbsp; <input type="number" {...props} />
      </label>
    </>
  );
}
