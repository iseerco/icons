import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,17H10V15h4Zm6-5.646V24H4V11.354A2.987,2.987,0,0,1,5.886,8.568L9,7.323V2H8V0h8V2H15V7.323l3.114,1.245A2.988,2.988,0,0,1,20,11.354ZM16,13H8v6h8Z"/></svg>

);
