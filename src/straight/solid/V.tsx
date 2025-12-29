import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const V = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.162,0L11.107,21.446c.172,.347,.507,.554,.894,.554h0c.387,0,.721-.207,.862-.481L21.844,0h2.156L14.686,22.339c-.511,1.024-1.54,1.661-2.684,1.661h-.002c-1.146,0-2.174-.638-2.711-1.724L-.005,0H2.162Z"/></svg>

);
