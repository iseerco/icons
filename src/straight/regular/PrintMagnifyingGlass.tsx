import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrintMagnifyingGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,16c0-2.76-2.24-5-5-5s-5,2.24-5,5,2.24,5,5,5c1.02,0,1.96-.31,2.75-.83l3.79,3.79,1.41-1.41-3.79-3.79c.52-.79,.83-1.74,.83-2.75Zm-5,3c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Zm5-13h-2V0H5V6H3c-1.65,0-3,1.35-3,3v12H5v3H13v-2H7v-6h2c0-.7,.1-1.37,.29-2H5v5H2V9c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v3h2v-3c0-1.65-1.35-3-3-3ZM7,2h10V6H7V2Z"/></svg>

);
