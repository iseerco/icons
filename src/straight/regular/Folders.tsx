import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3h-5.764L11.236,1H7c-1.654,0-3,1.346-3,3v15H24V6c0-1.654-1.346-3-3-3Zm-14,0h3.764l4,2h6.236c.552,0,1,.448,1,1v1H6v-3c0-.552,.449-1,1-1Zm-1,14V9H22v8H6Zm-4,4H20v2H0V8c0-1.302,.839-2.402,2-2.816v15.816Z"/></svg>

);
