import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LifeRing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.244,7.83a4.991,4.991,0,0,1,5.512,0l4.988-4.988a11.972,11.972,0,0,0-15.488,0Z"/><path d="M21.158,4.256,16.17,9.244a4.991,4.991,0,0,1,0,5.512l4.988,4.988a11.972,11.972,0,0,0,0-15.488Z"/><path d="M14.756,16.17a4.991,4.991,0,0,1-5.512,0L4.256,21.158a11.972,11.972,0,0,0,15.488,0Z"/><path d="M7.83,14.756a4.991,4.991,0,0,1,0-5.512L2.842,4.256a11.972,11.972,0,0,0,0,15.488Z"/></svg>

);
