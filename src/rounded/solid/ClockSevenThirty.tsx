import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockSevenThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,18c0,.553-.448,1-1,1s-1-.447-1-1v-3.057l-.644,.838c-.337,.438-.965,.519-1.402,.184-.438-.337-.52-.964-.184-1.402l2.437-3.172c.261-.339,.71-.476,1.115-.337,.405,.138,.678,.519,.678,.947v6Z"/></svg>

);
