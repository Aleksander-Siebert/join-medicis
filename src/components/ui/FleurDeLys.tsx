/**
 * Fleur de lys — motif emblématique (clin d'œil aux Médicis / à la Renaissance).
 * Monochrome (currentColor), donc recolorable et pivotable en CSS.
 */
export default function FleurDeLys({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* pétale central */}
      <path d="M12 2C10.3 5 10.3 8 12 11C13.7 8 13.7 5 12 2Z" />
      {/* lobe droit */}
      <path d="M12 11C14 9 16 7.6 18 8.1C19.6 8.5 19.1 11 16.6 12C15 12.6 13.5 12.2 12 11Z" />
      {/* lobe gauche */}
      <path d="M12 11C10 9 8 7.6 6 8.1C4.4 8.5 4.9 11 7.4 12C9 12.6 10.5 12.2 12 11Z" />
      {/* bandeau */}
      <path d="M5.8 12.1H18.2V14.1H5.8Z" />
      {/* pied */}
      <path d="M12 14C11.6 17 10.4 19.6 8 21C10.2 21.4 11.4 20.6 12 19.5C12.6 20.6 13.8 21.4 16 21C13.6 19.6 12.4 17 12 14Z" />
    </svg>
  );
}
