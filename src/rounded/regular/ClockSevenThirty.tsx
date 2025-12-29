import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockSevenThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm1,16v-6c0-.428-.273-.809-.678-.947-.404-.138-.854-.002-1.115,.337l-2.437,3.172c-.336,.438-.254,1.065,.184,1.402,.437,.335,1.065,.254,1.402-.184l.644-.838v3.057c0,.553,.448,1,1,1s1-.447,1-1Z"/></svg>

);
