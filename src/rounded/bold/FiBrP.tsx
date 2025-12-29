import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.5,24c-.829,0-1.5-.672-1.5-1.5V5.5C2,2.468,4.467,0,7.5,0h7c9.929,.353,9.922,14.65,0,15H5v7.5c0,.828-.671,1.5-1.5,1.5Zm1.5-12H14.5c5.935-.156,5.931-8.846,0-9H7.5c-1.378,0-2.5,1.121-2.5,2.5v6.5Z"/></svg>

);
