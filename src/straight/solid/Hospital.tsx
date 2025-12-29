import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,0H7c-1.654,0-3,1.346-3,3v21h16V3c0-1.654-1.346-3-3-3Zm-6,19h-3v-2h3v2Zm0-4h-3v-2h3v2Zm-2-7v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2Zm7,11h-3v-2h3v2Zm0-4h-3v-2h3v2Zm8-6v15h-2V6.184c1.161.414,2,1.514,2,2.816ZM2,6.184v17.816H0v-15c0-1.302.839-2.402,2-2.816Z"/></svg>

);
