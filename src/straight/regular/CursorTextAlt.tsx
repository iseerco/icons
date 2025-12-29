import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorTextAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 6v-3a3 3 0 0 0 -3-3h-3v2h-12v-2h-3a3 3 0 0 0 -3 3v3h2v12h-2v6h6v-2h12v2h6v-6h-2v-12zm-4-4h1a1 1 0 0 1 1 1v1h-2zm-18 1a1 1 0 0 1 1-1h1v2h-2zm2 19h-2v-2h2zm18 0h-2v-2h2zm-2-4h-2v2h-12v-2h-2v-12h2v-2h12v2h2zm-6-12h1v2h-1a1 1 0 0 0 -1 1v3h2v2h-2v1a1 1 0 0 0 1 1h1v2h-1a2.981 2.981 0 0 1 -2-.78 2.981 2.981 0 0 1 -2 .78h-1v-2h1a1 1 0 0 0 1-1v-1h-2v-2h2v-3a1 1 0 0 0 -1-1h-1v-2h1a2.981 2.981 0 0 1 2 .78 2.981 2.981 0 0 1 2-.78z"/></svg>
);
