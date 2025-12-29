import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChairDirector = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,0h-1V1H1V0H0V13.307l10.899,5.561L.84,24H3.04l8.96-4.571,8.96,4.571h2.201l-10.06-5.133,10.899-5.561V0ZM1,9H23v3.498c-1.115,.359-5.124,1.502-11,1.502s-9.885-1.143-11-1.502v-3.498ZM23,2v6H1V2H23ZM4.156,14.303c1.963,.367,4.617,.697,7.844,.697s5.881-.33,7.844-.697l-7.844,4.002-7.844-4.002Z"/>
</svg>

);
