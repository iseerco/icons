import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Typewriter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,16h-2v-2h2v2Zm4-2h-2v2h2v-2Zm-6,6h10v-2H7v2Zm8-4h2v-2h-2v2Zm9-6h-2v11c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V10H0v-2H2v-2h2V3c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v3h2v2h2v2ZM6,6h4v2h-1c-.552,0-1,.448-1,1s.448,1,1,1h6c.552,0,1-.448,1-1s-.448-1-1-1h-1v-2h4V3c0-.552-.448-1-1-1H7c-.552,0-1,.448-1,1v3Zm14,2h-2.172c.111,.313,.172,.649,.172,1,0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3,0-.351,.061-.687,.172-1h-2.172v13c0,.552,.448,1,1,1h14c.552,0,1-.448,1-1V8Z"/></svg>

);
