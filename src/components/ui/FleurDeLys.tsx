/**
 * Fleur de lys héraldique (clin d'œil aux Médicis / à la Renaissance).
 * Monochrome (currentColor) → recolorable et pivotable en CSS.
 */
export default function FleurDeLys({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* pétale central, pointu */}
      <path d="M12 1.5C9.8 6 9.8 9 12 12C14.2 9 14.2 6 12 1.5Z" />
      {/* lobe droit (retombant) */}
      <path d="M12 11C13.5 8.5 15.5 6.5 17.5 7.2C19.2 7.8 19 10.5 17.5 12.5C16.6 13.7 15.8 14.6 15 15.5C15 13.5 14.3 12 12 11.5Z" />
      {/* lobe gauche (retombant) */}
      <path d="M12 11C10.5 8.5 8.5 6.5 6.5 7.2C4.8 7.8 5 10.5 6.5 12.5C7.4 13.7 8.2 14.6 9 15.5C9 13.5 9.7 12 12 11.5Z" />
      {/* bandeau horizontal */}
      <rect x="5.3" y="11.6" width="13.4" height="2.1" rx="0.7" />
      {/* pied évasé */}
      <path d="M12 13.5C11.4 16.5 10 19.5 8.2 21.6C9.6 22.1 11 21.6 12 20.4C13 21.6 14.4 22.1 15.8 21.6C14 19.5 12.6 16.5 12 13.5Z" />
    </svg>
  );
}
