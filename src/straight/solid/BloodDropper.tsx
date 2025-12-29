import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BloodDropper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,8h4c0-2.757-2.243-5-5-5h-2.551c-.245-1.691-1.691-3-3.449-3s-3.204,1.309-3.449,3h-2.551C3.243,3,1,5.243,1,8H17v2H1v7c0,2.757,2.243,5,5,5h3v2.079h2v-2.079h2v2.079h2v-2.079h3c2.414,0,4.434-1.721,4.899-4h-3.899v-2h4v-2h-4v-2h4v-2h-4v-2Zm-7-3c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
