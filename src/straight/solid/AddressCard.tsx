import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AddressCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3v18c0,1.654-1.346,3-3,3h-5v-2h5c.551,0,1-.449,1-1V3c0-.551-.449-1-1-1h-5V0h5c1.654,0,3,1.346,3,3Zm-6.691,10.657c.445-.442.69-1.032.691-1.66,0-.628-.244-1.218-.72-1.691L9,2.729v5.271H0v8h9v5.273l8.309-7.616Z"/></svg>

);
