import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTwo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm.5,10.866l3.464-2c.479-.276,.642-.888,.366-1.366-.277-.479-.889-.644-1.366-.366l-1.964,1.134V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.357,.19,.688,.5,.866,.155,.089,.327,.134,.5,.134s.345-.045,.5-.134Z"/></svg>

);
