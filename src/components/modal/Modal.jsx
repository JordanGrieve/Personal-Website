// components/modal/Modal.jsx
export default function Modal({ id, children }) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-[#191919] text-white md:max-w-4xl max-h-[85vh]">
          {children}
        </div>
        <label className="modal-backdrop" htmlFor={id}>Close</label>
      </div>
    </>
  );
}
