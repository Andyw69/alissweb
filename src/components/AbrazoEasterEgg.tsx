import { useEffect, useState } from 'react'
import './AbrazoEasterEgg.css'

const ABRAZO_MESSAGES = [
  'Hey recibiste un Abacho :3',
  'No me vas abrazar?👀🥺',
  'Ush Obligado no vale 🤧! c va corriendo y c cae mas allasitos* xd sjsjjsjs',
]

const ABRAZO_FINAL =
  'Acuerdate que el NO PUEDO es para las personas que no pueden pero como TU SI PUEDES pues dale, tu puedees!!'

const TIKTOK_LINK =
  'https://www.tiktok.com/@frasesdelcine/video/7003174725560159493?is_from_webapp=1&sender_device=pc&web_id=7138599605306050053'

export function AbrazoEasterEgg() {
  const [started, setStarted] = useState(false)
  const [sent, setSent] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started) {
      return
    }
    const sentTimer = window.setTimeout(() => setSent(true), 2300)
    const doneTimer = window.setTimeout(() => setDone(true), 3000)
    return () => {
      window.clearTimeout(sentTimer)
      window.clearTimeout(doneTimer)
    }
  }, [started])

  return (
    <div className="abrazo">
      <button
        type="button"
        className="abrazo__trigger"
        onClick={() => setStarted(true)}
        aria-label="Recibir abrazo virtual"
      >
        <img src="/abrazo/penguin.svg" alt="Pingüino" />
      </button>

      {started ? (
        <div className="abrazo__card">
          <h1>Enviando Abrazo Virtual</h1>
          <div className="abrazo__message">{done ? ABRAZO_FINAL : ''}</div>
          <img src="/abrazo/penguin.svg" alt="Pingüino" />
          <p className="abrazo__cargando">{sent ? 'Abrazo enviado!' : 'Cargando...'}</p>
          <div className="abrazo__bar">
            <div className={sent ? 'abrazo__fill is-done' : 'abrazo__fill is-loading'} />
          </div>
          {done ? (
            <>
              {ABRAZO_MESSAGES.map((message) => (
                <p key={message} className="abrazo__chat">
                  {message}
                </p>
              ))}
              <a
                className="abrazo__link"
                href={TIKTOK_LINK}
                target="_blank"
                rel="noreferrer"
              >
                No tocar!
              </a>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
