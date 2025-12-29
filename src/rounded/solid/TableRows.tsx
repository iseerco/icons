import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,22c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2V22Zm2-11H24V7c0-2.757-2.243-5-5-5H7V11Zm0,2v9h12c2.757,0,5-2.243,5-5v-4H7Z"/></svg>

);
