import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMasterPlanIntegrate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,17.5v6.5H0v-6.5c0-1.379,1.121-2.5,2.5-2.5h2.639l3.069,3H3v3H21v-3h-5.207l3.069-3h2.638c1.379,0,2.5,1.121,2.5,2.5Zm0-15v5.5h-3.5v2.5c0,1.378-1.121,2.5-2.5,2.5h-4.5v2h2.5l-3.371,3.295c-.347,.347-.91,.347-1.257,0l-3.372-3.295h2.5v-2H6c-1.379,0-2.5-1.122-2.5-2.5v-2.5H0V2.5C0,1.122,1.121,0,2.5,0H7.5c1.379,0,2.5,1.122,2.5,2.5v5.5h-3.5v2h11v-2h-3.5V2.5c0-1.378,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5ZM3,5H7V3H3v2ZM21,3h-4v2h4V3Z"/>
</svg>

);
