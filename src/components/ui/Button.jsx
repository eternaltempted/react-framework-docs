// this component accepts props,
// but they are destructured in the function parameters
// which lets us access the values directly
// without using "props.propertyName"

export default function Button({ text, icon, style, func, disabled, type="button" }) {
  // The style prop contains Tailwind classes
  // passed from the parent component.

  return (
    <button type={type} onClick={func} className={`${style} cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`} disabled={disabled}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
