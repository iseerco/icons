import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramPrevious = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,10h3l-3.79-3.71c-.39-.39-1.02-.39-1.41,0l-3.79,3.71h3v4H0v6.5c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5v-6.5H13.5v-4Zm7.5,10.5c0,.28-.22,.5-.5,.5H3.5c-.28,0-.5-.22-.5-.5v-3.5H21v3.5ZM24,3v7h-4.64l-5.24-5.12c-1.17-1.17-3.07-1.17-4.23-.02l-5.26,5.14H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3Z"/></svg>

);
