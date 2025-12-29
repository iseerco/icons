import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListDropdown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,10v14H24V10H0Zm19,10H5v-2h14v2Zm0-4H5v-2h14v2ZM21,0H3C1.35,0,0,1.35,0,3v5H24V3c0-1.65-1.35-3-3-3Zm-3.76,5.71c-.39,.39-1.01,.39-1.4,0l-2.76-2.71h6.91l-2.76,2.71Z"/></svg>

);
