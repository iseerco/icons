import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TablePicnic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12h-3.808l-2.961-7h3.769V3H3v2h3.769l-2.961,7H0v2H2.962L0,21H2.172l2.962-7h13.734l2.962,7h2.172l-2.962-7h2.962v-2Zm-18.021,0l2.962-7h6.119l2.962,7H5.979Z"/></svg>

);
