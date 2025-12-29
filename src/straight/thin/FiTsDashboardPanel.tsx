import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDashboardPanel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,7h4v1h-4v-1Zm0,4h4v-1h-4v1Zm0,3h4v-1h-4v1Zm0,3h4v-1h-4v1Zm7-11.5v15.5H0V5.5c0-1.378,1.121-2.5,2.5-2.5H21.5c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5v14.5H23V5.5Zm-8,6.5c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-6,5c1.198,0,2.284-.441,3.146-1.146l-3.646-3.646V7.051c-2.52,.255-4.5,2.364-4.5,4.949,0,2.757,2.243,5,5,5Zm5-5c0-2.586-1.98-4.694-4.5-4.949v4.742l3.354,3.354c.705-.862,1.146-1.948,1.146-3.146Z"/>
</svg>

);
