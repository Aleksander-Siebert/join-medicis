/**
 * Cheap CSS-only substitute for the WebGL <Aurora />.
 * Three layered radial gradients on a forest-900 base, drifted via
 * background-position keyframes. No JS, no GPU loop. Use it everywhere
 * Aurora's animated noise isn't needed (page heroes, decorative sections).
 *
 * Keep <Aurora /> for moments that really need the noise feel
 * (the SupportProject CTAs).
 */
type Props = {
  /** Extra Tailwind classes appended to the wrapper. */
  className?: string;
};

export default function AuroraGradient({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none aurora-gradient ${className}`}
    />
  );
}
