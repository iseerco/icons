import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonFalling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.882,14h-3.837l-3.374-7.624,2.958-1.578,3.229-3.634-1.494-1.328-2.992,3.366-6.426,3.427c-.748,.399-1.388,.987-1.848,1.7L.198,15.919l1.68,1.085,4.775-7.396,6.369,14.392h2.188l-3.541-8h6.372l3.667,3.739,1.428-1.4-4.255-4.338Zm-10.658-5.786l1.678-.895,2.956,6.681h-2.074l-2.561-5.786ZM4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Z"/>
</svg>

);
