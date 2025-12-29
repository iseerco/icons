import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGridDividers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,3H1.5c-.83,0-1.5-.67-1.5-1.5S.67,0,1.5,0H22.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5Zm1.5,11.5c0-.83-.67-1.5-1.5-1.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5ZM6,9v-2c0-1.1-.9-2-2-2H2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2Zm9,0v-2c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2Zm9,0v-2c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2ZM6,22v-2c0-1.1-.9-2-2-2H2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2Zm9,0v-2c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2Zm9,0v-2c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2Z"/></svg>

);
