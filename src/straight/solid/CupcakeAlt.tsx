import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupcakeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,14H2.5c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h10.5v-2H5c-1.105,0-2-.895-2-2s.895-2,2-2h6c.75-.75,1-1.5,1-3,1.686,0,3.368,1.132,3.855,3h3.145c1.105,0,2,.895,2,2s-.895,2-2,2h-2v2h4.5c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5Zm-18.691,2l.881,5.477c.235,1.462,1.481,2.523,2.962,2.523h10.695c1.48,0,2.727-1.061,2.962-2.523l.881-5.477H2.809Z"/>
</svg>

);
