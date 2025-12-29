import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeForwardTen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 2v3.362a12 12 0 1 0 -10 18.638v-2a10 10 0 1 1 8.665-15h-3.665v2h5a2 2 0 0 0 2-2v-5z"/><path d="m13 13h-6v-2h4v-5h2z"/><path d="m21 24a3 3 0 0 1 -3-3v-3a3 3 0 0 1 6 0v3a3 3 0 0 1 -3 3zm0-7a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1-1z"/><path d="m17 24h-2v-5.586l-1.293 1.293-1.414-1.414 3-3a1 1 0 0 1 1.707.707z"/></svg>
);
