import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.555,11.083l-5.555-5.083v5H2V3H0V21H2V13H18v5.159l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>

);
