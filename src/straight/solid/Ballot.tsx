import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ballot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3ZM10,20H6v-4h4v4Zm0-6H6v-4h4v4Zm0-6H6V4h4v4Zm8,11h-6v-2h6v2Zm0-6h-6v-2h6v2Zm0-6h-6v-2h6v2Z"/></svg>

);
