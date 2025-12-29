import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OrderHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,0c-2.761,0-5,2.239-5,5s2.239,5,5,5,5-2.239,5-5S21.761,0,19,0Zm1.293,7.707l-2.293-2.293V2h2v2.586l1.707,1.707-1.414,1.414Zm-11.293,14.293c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Zm12.835-7H5.654l.131,1.116c.059,.504,.486,.884,.993,.884h13.222v2H6.778c-1.521,0-2.802-1.139-2.979-2.649L2.215,2.884c-.059-.504-.486-.884-.993-.884H0V0H1.222c1.521,0,2.802,1.139,2.979,2.649l.041,.351H12.294c-.189,.634-.294,1.305-.294,2,0,3.866,3.134,7,7,7,1.273,0,2.462-.345,3.49-.938l-.655,3.938Zm-2.835,7c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Z"/>
</svg>

);
