import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,22H17.65A8.985,8.985,0,0,0,21,15c0-4.677-5.961-9.848-7.846-11.367A2,2,0,1,0,10.8,3.6C8.786,5.009,3,9.531,3,15a8.985,8.985,0,0,0,3.35,7H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2ZM5,15c0-4.485,5.2-8.526,6.958-9.765a33.425,33.425,0,0,1,3.4,3.172l-4.127,4.952a1,1,0,0,0,1.536,1.282L16.68,9.946C18,11.619,19,13.423,19,15A7,7,0,0,1,5,15Z"/></svg>

);
