import React from 'react'
import ReactDOM from 'react-dom';

export const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
      <div className='modal-overlay'>
        <div className='modal-content'>
          <button type='button' className='modal-close' onClick={onClose}>Close</button>
          {children}
        </div>
      </div>, document.body
  )
}
