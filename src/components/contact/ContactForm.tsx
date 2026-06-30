"use client";

import { useState } from "react";

const FIELD =
  "w-full px-4 py-3 bg-cream-50 border border-ink-200 rounded-[12px] text-ink-900 text-sm font-sans placeholder:text-ink-400 focus:border-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-900/15 transition-colors";
const LABEL =
  "block text-xs tracking-widest uppercase text-ink-700 mb-2 font-sans font-semibold";

// FormSubmit forwards the submission to this inbox (free, no backend).
// First submission triggers a one-time activation email to confirm the address.
const ENDPOINT = "https://formsubmit.co/ajax/joinmedicis@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, it's a bot: silently "succeed".
    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setError("");

    const payload = {
      Prénom: data.get("prenom"),
      Nom: data.get("nom"),
      Email: data.get("email"),
      Sujet: data.get("sujet"),
      Message: data.get("message"),
      _subject: `Join Médicis · Contact — ${data.get("sujet") || "Nouveau message"}`,
      _captcha: "false",
      _template: "table",
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Échec de l'envoi");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-ink-900 font-medium mb-2">Message envoyé !</h2>
        <p className="text-sm text-ink-700 font-sans leading-relaxed max-w-sm mx-auto">
          Merci de m&rsquo;avoir écrit. Je vous réponds en général sous 48&nbsp;h.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-forest-900 hover:text-forest-700 underline underline-offset-4 font-sans"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Honeypot anti-spam (hidden) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={LABEL} htmlFor="prenom">Prénom</label>
          <input id="prenom" name="prenom" type="text" required className={FIELD} placeholder="Votre prénom" />
        </div>
        <div>
          <label className={LABEL} htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" className={FIELD} placeholder="Votre nom" />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={FIELD} placeholder="votre@email.com" />
      </div>

      <div>
        <label className={LABEL} htmlFor="sujet">Sujet</label>
        <select id="sujet" name="sujet" required className={`${FIELD} appearance-none`} defaultValue="">
          <option value="" disabled>Sélectionnez un sujet</option>
          <option value="Question sur un Skill">Question sur un Skill</option>
          <option value="Proposer une contribution">Proposer une contribution</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label className={LABEL} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${FIELD} resize-none`}
          placeholder="Votre message..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-[10px] px-4 py-3 font-sans">
          {error || "L'envoi a échoué. Réessayez ou écrivez-moi directement."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans font-medium rounded-[12px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
