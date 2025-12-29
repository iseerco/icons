import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Apartment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5h-2V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v6H3c-1.654,0-3,1.346-3,3v12H24V8c0-1.654-1.346-3-3-3ZM6,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z"/></svg>

);
