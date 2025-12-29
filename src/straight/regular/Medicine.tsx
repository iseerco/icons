import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Medicine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 8h-2.01l-.019-2h2.029v-6h-12v6h2v2h-2a3 3 0 0 0 -3 3v13h18v-13a3 3 0 0 0 -3-3zm-10-6h8v2h-8zm11 20h-14v-11a1 1 0 0 1 1-1h4v-4h3.97l.04 4h3.99a1 1 0 0 1 1 1zm-6-7h2v2h-2v2h-2v-2h-2v-2h2v-2h2z"/></svg>
);
