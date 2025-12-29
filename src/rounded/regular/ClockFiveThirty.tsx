import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockFiveThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm1,16v-3.057l.644,.838c.336,.438,.965,.52,1.402,.184,.438-.336,.52-.964,.184-1.402l-2.437-3.172c-.261-.339-.711-.477-1.115-.337-.405,.138-.678,.519-.678,.947v6c0,.552,.448,1,1,1s1-.448,1-1Z"/></svg>

);
