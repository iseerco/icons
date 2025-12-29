import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Form = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 14h-6v-2h6zm6-7v17h-18v-21a3 3 0 0 1 3-3h8v7zm-4 11h-10v2h10zm0-8h-10v6h10zm2.828-6.586-2.242-2.242a4 4 0 0 0 -1.586-.953v4.781h4.785a3.969 3.969 0 0 0 -.957-1.586z"/></svg>
);
