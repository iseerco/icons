import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleDoubleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.928,12.111l-4.928-4.928-4.928,4.928-2.121-2.121,5.281-5.281c.943-.944,2.592-.944,3.535,0l5.281,5.281-2.121,2.121Zm2.121,5.248l-5.867-5.867c-.629-.635-1.738-.631-2.359-.004l-5.871,5.871,2.121,2.121,4.928-4.927,4.928,4.927,2.121-2.121Zm-7.985-3.743l-.007-.007,.007,.007Zm1.877-.004l.007-.007-.007,.007Z"/></svg>

);
