import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockOneThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.866,9.036l-1.866,3.232v5.732c0,.553-.448,1-1,1s-1-.447-1-1v-6c0-.176,.046-.348,.134-.5l2-3.464c.276-.479,.887-.643,1.366-.366,.479,.276,.642,.888,.366,1.366Z"/></svg>

);
