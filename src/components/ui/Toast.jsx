export default function Toast({ type, title, message, onClick }) {
  const styles = {
    success: "bg-green-100 text-green-800 border-green-200",
    error: "bg-red-100 text-red-400 border-red-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    info: "bg-cyan-100 text-cyan-800 border-cyan-200",
    updated: "bg-purple-100 text-purple-800 border-purple-200",
    development: "bg-cyan-100 text-cyan-800 border-cyan-200",
    
  };

  return (
    <div
      className={`fixed top-6 right-6 z-50 max-w-76 rounded-2xl px-4 py-3 shadow-xl ${styles[type] || styles.info}`}
    >
      <div className="flex flex-row justify-between">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="cursor-pointer" onClick={onClick}>
          x
        </span>
      </div>
      <p className="text-black">{message}</p>
    </div>
  );
}
