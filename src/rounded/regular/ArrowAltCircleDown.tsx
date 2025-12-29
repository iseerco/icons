import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.913,13.35l-4.361,4.418c-.305,.309-.799,.309-1.104,0l-4.361-4.418c-.492-.498-.143-1.35,.552-1.35h3.361V7c0-.552,.448-1,1-1s1,.448,1,1v5h3.361c.695,0,1.044,.852,.552,1.35Zm7.087-1.35c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
