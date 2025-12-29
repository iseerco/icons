import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ProteinShake = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.126 6 .935-2.182c.474-1.104 1.556-1.818 2.757-1.818h.182v-2h2v2h6.182c1.201 0 2.283.714 2.757 1.817l.935 2.183zm-.125 2 .199 3h4.799v2h-4.665l.133 2h4.533v2h-4.4l.133 2h4.268v2h-4.136l.199 3h13.871l1.064-16h-15.997z"/></svg>
);
