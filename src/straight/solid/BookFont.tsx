import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookFont = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,6.99l1.08,3.03h-2.16l1.08-3.03ZM6,18V0h-1c-1.66,0-3,1.34-3,3v15.77c.55-.49,1.26-.77,2-.77h2ZM2,22c0,1.1,.9,2,2,2H22v-4H4c-1.1,0-2,.9-2,2ZM22,2V18H8V0h12c1.1,0,2,.9,2,2Zm-2.37,12.02l-3.22-9.02c-.22-.6-.77-.99-1.41-.99s-1.19,.39-1.41,1l-3.22,9.02h2.12l.71-2h3.59l.71,2h2.12Z"/></svg>

);
