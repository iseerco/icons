import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMobileNotch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,0h-5c-3.033,0-5.5,2.467-5.5,5.5v13c0,3.033,2.467,5.5,5.5,5.5h5c3.033,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.467-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.122,2.5-2.5,2.5h-5c-1.378,0-2.5-1.122-2.5-2.5V5.5c0-1.079,.688-2.001,1.648-2.35l.511,1.021c.254,.508,.773,.829,1.342,.829h3c.568,0,1.087-.321,1.342-.829l.511-1.021c.96,.349,1.648,1.271,1.648,2.35v13Zm-4,.5h-2c-.552,0-1-.448-1-1h0c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1Z"/></svg>

);
