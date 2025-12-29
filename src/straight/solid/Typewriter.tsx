import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Typewriter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,6H4V3c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v3h-6v2h1c.552,0,1,.448,1,1s-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h1v-2Zm14,4h-2v11c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V10H0v-2H6.184c-.112,.314-.184,.648-.184,1,0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3,0-.352-.072-.686-.184-1h6.184v2Zm-11,6h2v-2h-2v2Zm-4,0h2v-2h-2v2Zm-4,0h2v-2h-2v2Zm14,2H5v2h14v-2Zm0-4h-2v2h2v-2Z"/></svg>

);
