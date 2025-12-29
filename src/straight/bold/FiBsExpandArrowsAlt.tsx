import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExpandArrowsAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.071,5.053,24,8V1a1,1,0,0,0-1-1H16.048l2.908,2.926L11.986,9.9l-6.95-6.95L8,0H1A1,1,0,0,0,0,1V7.952L2.909,5.061l6.956,6.956L2.932,18.95,0,16v7a1,1,0,0,0,1,1H7.952l-2.9-2.923,6.939-6.939,6.947,6.947L16,24h7a1,1,0,0,0,1-1V16.048L21.06,18.97l-6.953-6.953Z"/></svg>

);
