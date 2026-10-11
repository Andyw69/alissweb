import { useState, type MouseEvent } from 'react'

export function GiftModal() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  const handleClose = () => setIsOpen(false)

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <p>Tu cabello es largo dificil de cuidar y tu eres pequeña digna de admirar :3</p>
      </div>
    </div>
  )
}
