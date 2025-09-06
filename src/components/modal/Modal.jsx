// components/modal/Modal.jsx
export default function Modal({ id, children }) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-[#191919] text-white max-w-4xl w-full max-h-[85vh] overflow-y-auto">
          {children}
        </div>
        <label className="modal-backdrop" htmlFor={id}>Close</label>
      </div>
    </>
  );
}
