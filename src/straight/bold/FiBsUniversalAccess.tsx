import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUniversalAccess = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,21c-4.96,0-9-4.04-9-9S7.04,3,12,3s9,4.04,9,9-4.04,9-9,9Zm-2-15c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Zm4,5.7v1.45l2.34,4.68-2.68,1.34-1.59-3.17h-.15l-1.59,3.17-2.68-1.34,2.34-4.68v-1.45l-4.11-1.83,1.22-2.74,4.21,1.87h1.36l4.21-1.87,1.22,2.74-4.11,1.83Z"/></svg>

);
