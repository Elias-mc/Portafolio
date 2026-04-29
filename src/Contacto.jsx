import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contacto() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const enviar = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ft40ips",
        "template_91h106q",
        form.current,
        "MMWaYYkqruE_vly50",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 3500);
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3500);
      });
  };

  return (
    <>
      <style>{`
        /* ── Spinner ── */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 20px; height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* ── Avión que despega ── */
        @keyframes planeLaunch {
          0%   { transform: translate(0,0) rotate(0deg);   opacity: 1; }
          60%  { transform: translate(60px,-40px) rotate(-30deg); opacity: 1; }
          100% { transform: translate(120px,-80px) rotate(-30deg); opacity: 0; }
        }
        .plane-launch { animation: planeLaunch 0.8s ease forwards; }

        /* ── Check mark ── */
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          70%  { transform: scale(1.25) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .check-pop { animation: checkPop 0.45s cubic-bezier(0.34,1.5,0.64,1) forwards; }

        /* ── Error shake ── */
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-6px); }
          40%,80% { transform: translateX(6px); }
        }
        .shake { animation: shake 0.4s ease; }

        /* ── Input focus glow ── */
        .contact-input {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.15);
        }

        /* ── Botón ── */
        .send-btn {
          transition: transform 0.2s cubic-bezier(0.34,1.4,0.64,1),
                      background 0.2s ease,
                      box-shadow 0.2s ease;
          overflow: hidden;
          position: relative;
        }
        .send-btn:not(:disabled):hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        .send-btn:not(:disabled):active {
          transform: scale(0.97);
        }

        /* ── Ripple ── */
        @keyframes ripple {
          from { transform: scale(0); opacity: 0.35; }
          to   { transform: scale(4); opacity: 0; }
        }
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          width: 80px; height: 80px;
          background: white;
          animation: ripple 0.5s ease-out forwards;
          pointer-events: none;
        }

        /* ── Success overlay ── */
        @keyframes successFade {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        .success-overlay {
          animation: successFade 0.4s cubic-bezier(0.34,1.3,0.64,1) forwards;
        }

        /* ── Confetti dots ── */
        @keyframes confettiDrop {
          0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(50px) rotate(360deg); opacity: 0; }
        }
        .confetti-dot {
          position: absolute;
          width: 7px; height: 7px;
          border-radius: 2px;
          animation: confettiDrop 1s ease forwards;
        }
      `}</style>

      <form
        ref={form}
        onSubmit={enviar}
        className="flex flex-col gap-6 relative"
      >
        {/* ── SUCCESS OVERLAY ── */}
        {status === "success" && (
          <div className="success-overlay absolute inset-0 z-10 flex flex-col items-center justify-center bg-orange-50/95 rounded-2xl gap-4">
            {/* confetti dots */}
            {["#f97316", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa"].map(
              (color, i) => (
                <span
                  key={i}
                  className="confetti-dot"
                  style={{
                    background: color,
                    left: `${15 + i * 15}%`,
                    top: "20%",
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ),
            )}
            <div className="check-pop w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
            </div>
            <p className="font-serif text-xl font-bold text-zinc-800">
              ¡Mensaje enviado!
            </p>
            <p className="font-mono text-sm text-zinc-500 text-center">
              Te responderé lo antes posible.
            </p>
          </div>
        )}

        {/* ── ERROR OVERLAY ── */}
        {status === "error" && (
          <div className="success-overlay shake absolute inset-0 z-10 flex flex-col items-center justify-center bg-red-50/95 rounded-2xl gap-4">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
            </div>
            <p className="font-serif text-xl font-bold text-zinc-800">
              Algo salió mal
            </p>
            <p className="font-mono text-sm text-zinc-500 text-center">
              Intentá de nuevo en un momento.
            </p>
          </div>
        )}

        {/* ── CAMPOS ── */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 text-orange-300"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <h4 className="font-mono text-md text-zinc-800">Nombre</h4>
          </div>
          <input
            name="user_name"
            placeholder="Tu nombre completo"
            required
            disabled={status === "sending"}
            className="contact-input py-3 px-4 border-2 rounded-lg text-zinc-600 font-mono border-zinc-500/50 font-bold w-full disabled:opacity-50"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 text-orange-300"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <h4 className="font-mono text-md text-zinc-800">Email</h4>
          </div>
          <input
            name="user_email"
            type="email"
            placeholder="tu@email.com"
            required
            disabled={status === "sending"}
            className="contact-input py-3 px-4 border-2 rounded-lg text-zinc-600 font-mono border-zinc-500/50 font-bold w-full disabled:opacity-50"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 text-orange-300"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
            <h4 className="font-mono text-md text-zinc-800">Mensaje</h4>
          </div>
          <textarea
            name="message"
            placeholder="Contame tu idea..."
            required
            rows={4}
            disabled={status === "sending"}
            className="contact-input py-3 px-4 border-2 rounded-lg text-zinc-600 font-mono border-zinc-500/50 font-bold w-full resize-none disabled:opacity-50"
          />
        </div>

        {/* ── BOTÓN ── */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="send-btn bg-zinc-950 hover:bg-black disabled:opacity-70 disabled:cursor-not-allowed text-zinc-200 py-3 rounded-md flex items-center justify-center gap-4"
        >
          {status === "idle" && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
              Enviar mensaje
            </>
          )}

          {status === "sending" && (
            <>
              <div className="spinner" />
              <span className="font-mono text-sm tracking-wide">
                Enviando...
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 plane-launch"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
              </svg>
            </>
          )}
        </button>
      </form>
    </>
  );
}
