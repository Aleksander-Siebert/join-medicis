/**
 * Décor golden ratio : spirale de Fibonacci + rectangles φ imbriqués.
 * Tracé exact (chaque arc est un quart de cercle de rayon = côté du carré
 * Fibonacci : 8, 13, 21, 34, 55, 89) dans un rectangle 144×89 (≈ φ).
 * Purement décoratif — à afficher en filigrane.
 */
type Props = { className?: string; stroke?: string };

export default function GoldenSpiral({ className = "", stroke = "#0E3F2D" }: Props) {
  return (
    <svg
      viewBox="0 0 144 89"
      className={className}
      fill="none"
      stroke={stroke}
      aria-hidden="true"
    >
      {/* Rectangles φ imbriqués (lignes de subdivision) */}
      <g strokeWidth="0.4" opacity="0.5">
        <rect x="0" y="0" width="144" height="89" />
        <line x1="89" y1="0" x2="89" y2="89" />
        <line x1="89" y1="34" x2="144" y2="34" />
        <line x1="110" y1="0" x2="110" y2="34" />
        <line x1="89" y1="21" x2="110" y2="21" />
        <line x1="102" y1="21" x2="102" y2="34" />
      </g>

      {/* Spirale dorée (inner → outer) */}
      <path
        strokeWidth="0.8"
        d="M110 26
           A8 8 0 0 1 102 34
           A13 13 0 0 1 89 21
           A21 21 0 0 1 110 0
           A34 34 0 0 1 144 34
           A55 55 0 0 1 89 89
           A89 89 0 0 1 0 0"
      />
    </svg>
  );
}
