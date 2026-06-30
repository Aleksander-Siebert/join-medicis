"use client";

import { useState } from "react";

const FIELD =
  "w-full px-4 py-3 bg-cream-50 border border-ink-200 rounded-[12px] text-ink-900 text-sm font-sans placeholder:text-ink-400 focus:border-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-900/15 transition-colors";
const LABEL =
  "block text-xs tracking-widest uppercase text-ink-700 mb-2 font-sans font-semibold";
const HINT = "text-xs text-ink-500 font-sans mt-1.5";

// Same FormSubmit inbox as the contact form.
const ENDPOINT = "https://formsubmit.co/ajax/joinmedicis@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

export default function ContributeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setError("");

    const payload = {
      "Prénom et nom": data.get("nom_complet"),
      Email: data.get("email"),
      "Lien profil": data.get("lien_profil") || "—",
      "Type de ressource": data.get("type"),
      "Nom de la ressource": data.get("nom_ressource"),
      "Lien vers la ressource": data.get("lien_ressource"),
      Description: data.get("description"),
      "Pourquoi Join Médicis": data.get("justification"),
      "Le contributeur est": data.get("role_contributeur"),
      _subject: `Join Médicis · Contribution — ${data.get("type")} — ${data.get("nom_ressource")}`,
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
        <h3 className="font-serif text-2xl text-ink-900 font-medium mb-2">Ressource soumise !</h3>
        <p className="text-sm text-ink-700 font-sans leading-relaxed max-w-sm mx-auto">
          Merci. Je l&rsquo;examine et vous recevrez une réponse sous 72&nbsp;h, acceptée
          ou refusée avec une raison dans les deux cas.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-forest-900 hover:text-forest-700 underline underline-offset-4 font-sans"
        >
          Soumettre une autre ressource
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={LABEL} htmlFor="nom_complet">Votre prénom et nom</label>
          <input id="nom_complet" name="nom_complet" type="text" required className={FIELD} placeholder="Votre prénom et nom" />
        </div>
        <div>
          <label className={LABEL} htmlFor="email">Votre email</label>
          <input id="email" name="email" type="email" required className={FIELD} placeholder="vous@email.com" />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="lien_profil">Lien LinkedIn ou site (optionnel)</label>
        <input id="lien_profil" name="lien_profil" type="url" className={FIELD} placeholder="https://linkedin.com/in/..." />
        <p className={HINT}>Pour vous attribuer la contribution sur votre profil auteur.</p>
      </div>

      <div>
        <label className={LABEL} htmlFor="type">Type de ressource</label>
        <select id="type" name="type" required className={`${FIELD} appearance-none`} defaultValue="">
          <option value="" disabled>Sélectionnez un type</option>
          <option value="Skill Claude">Skill Claude</option>
          <option value="Serveur MCP">Serveur MCP</option>
          <option value="Ressource écosystème">Ressource écosystème (outil, individu, communauté…)</option>
          <option value="Workflow / Automation">Workflow / Automation</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label className={LABEL} htmlFor="nom_ressource">Nom de la ressource</label>
        <input id="nom_ressource" name="nom_ressource" type="text" required className={FIELD} placeholder="Ex : Skills Lemlist, Corey Haines, Paper Club MCP…" />
      </div>

      <div>
        <label className={LABEL} htmlFor="lien_ressource">Lien vers la ressource</label>
        <input id="lien_ressource" name="lien_ressource" type="url" required className={FIELD} placeholder="https://..." />
      </div>

      <div>
        <label className={LABEL} htmlFor="description">Décrivez la ressource en 2-3 phrases</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          required
          className={`${FIELD} resize-none`}
          placeholder="Ce que c'est, à qui c'est destiné, ce que ça permet concrètement."
        />
      </div>

      <div>
        <label className={LABEL} htmlFor="justification">Pourquoi ça mérite d&rsquo;être dans Join Médicis ?</label>
        <textarea
          id="justification"
          name="justification"
          rows={3}
          required
          className={`${FIELD} resize-none`}
          placeholder="Résultats mesurés, cas d'usage testés, ce qui la différencie des alternatives…"
        />
        <p className={HINT}>Règle absolue : aucune ressource non testée ne se publie.</p>
      </div>

      <div>
        <label className={LABEL} htmlFor="role_contributeur">Vous êtes…</label>
        <select id="role_contributeur" name="role_contributeur" required className={`${FIELD} appearance-none`} defaultValue="">
          <option value="" disabled>Sélectionnez</option>
          <option value="L'auteur ou créateur de la ressource">L&rsquo;auteur ou créateur de la ressource</option>
          <option value="Un utilisateur qui la recommande">Un utilisateur qui la recommande</option>
          <option value="Un employé de l'entreprise concernée">Un employé de l&rsquo;entreprise concernée</option>
        </select>
        <p className={HINT}>
          Si vous représentez l&rsquo;entreprise concernée, je mentionnerai votre contribution sur la page.
        </p>
      </div>

      {/* Info box */}
      <div className="flex gap-3 items-start bg-cream-100 border border-ink-100 rounded-[12px] p-4">
        <svg className="w-4 h-4 text-forest-900 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" strokeLinecap="round" />
        </svg>
        <p className="text-xs text-ink-700 font-sans leading-relaxed">
          Vous travaillez pour une ressource déjà listée et un détail est inexact ?
          Utilisez aussi ce formulaire, l&rsquo;objectif n&rsquo;est jamais de dénigrer,
          juste d&rsquo;être honnête.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-[10px] px-4 py-3 font-sans">
          {error || "L'envoi a échoué. Réessayez ou écrivez-moi directement."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans font-medium rounded-[12px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {status === "loading" ? "Envoi en cours…" : "Soumettre ma ressource"}
      </button>
    </form>
  );
}
