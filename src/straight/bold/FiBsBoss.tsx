import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBoss = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,10c2.757,0,5-2.243,5-5S14.757,0,12,0s-5,2.243-5,5,2.243,5,5,5Zm0-7c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm12,15h-4v-1.5c0-3.033-2.467-5.5-5.5-5.5h-5c-3.033,0-5.5,2.467-5.5,5.5v1.5H0v3h1v3h3v-3h16v3h3v-3h1v-3Zm-7-1.5v1.5h-3.43l-.669-2.336,1.109-1.664h.49c1.378,0,2.5,1.122,2.5,2.5Zm-10,0c0-1.378,1.122-2.5,2.5-2.5h.49l1.109,1.664-.669,2.336h-3.43v-1.5Z"/>
</svg>

);
