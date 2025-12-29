import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-2a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1 -5 5zm3-12v-2a2 2 0 0 0 -2-2h-16a2 2 0 0 0 -2 2v2zm-3.039-6a12.664 12.664 0 0 0 -1.622-5.594.994.994 0 0 0 -1.692.15 3.938 3.938 0 0 1 -3.685 2.457h-1.962a4.506 4.506 0 0 0 -4.588 2.987z"/></svg>
);
