import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHastag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,9a1.5,1.5,0,0,0,0-3H18.872l.613-4.288a1.5,1.5,0,1,0-2.97-.424L15.842,6H9.872l.613-4.288a1.5,1.5,0,1,0-2.97-.424L6.842,6H2.5a1.5,1.5,0,0,0,0,3H6.413l-.857,6H1.5a1.5,1.5,0,0,0,0,3H5.128l-.613,4.288a1.5,1.5,0,0,0,2.97.424L8.158,18h5.97l-.613,4.288a1.5,1.5,0,0,0,2.97.424L17.158,18H21.5a1.5,1.5,0,0,0,0-3H17.587l.857-6Zm-7.944,6H8.587l.857-6h5.969Z"/></svg>

);
