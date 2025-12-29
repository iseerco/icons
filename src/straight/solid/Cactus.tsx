import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cactus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,10c-1.381,0-2.5,1.119-2.5,2.5v2.5h-2V5C17,2.078,14.48-.266,11.5.024c-2.597.254-4.5,2.589-4.5,5.199v4.777h-2v-2.5c0-1.381-1.119-2.5-2.5-2.5S0,6.119,0,7.5v2.5c0,2.761,2.239,5,5,5h2v9h10v-4h2c2.761,0,5-2.239,5-5v-2.5c0-1.381-1.119-2.5-2.5-2.5Zm-9.5,11h-2v-2h2v2Zm0-14h-2v-2h2v2Zm2,7h-2v-2h2v2Z"/></svg>

);
