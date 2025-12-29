import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mockup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14l10,3.42-4.47,2.11-2.11,4.47-3.42-10ZM3,24V7.72L0,6.72V0H8.48l.24,.67c.5,1.4,1.82,2.33,3.28,2.33s2.79-.94,3.28-2.33l.24-.67h8.48V6.72l-3,1v6.9l-11.21-3.84,4.52,13.21H3ZM14,9h2v2h2V7h-4v2Zm-8,2h2v-2h2v-2H6v4Zm0,8h4v-2h-2v-2h-2v4Z"/></svg>

);
