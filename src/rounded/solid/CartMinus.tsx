import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CartMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.82,9.57l-.24,1.32c-.43,2.38-2.5,4.11-4.92,4.11H5.74c.42,1.17,1.53,2,2.82,2h10.44c.55,0,1,.45,1,1s-.45,1-1,1H8.56c-2.53,0-4.67-1.9-4.97-4.42L2.21,2.88c-.06-.5-.49-.88-.99-.88h-.22c-.55,0-1-.45-1-1S.45,0,1,0h.22c1.52,0,2.8,1.14,2.98,2.65l.04,.35H12.81c-.51,.88-.81,1.91-.81,3,0,3.31,2.69,6,6,6,1.98,0,3.72-.96,4.82-2.43ZM7,20c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm10,0c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm-2-13h6c.55,0,1-.45,1-1s-.45-1-1-1h-6c-.55,0-1,.45-1,1s.45,1,1,1Z"/></svg>

);
