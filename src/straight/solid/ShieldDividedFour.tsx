import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldDividedFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,11V0L4.302,2.221c-1.375,.456-2.302,1.741-2.302,3.189v5.59H11Z"/>
  <path d="M13,11h9V5.405c0-1.446-.926-2.729-2.298-3.183L13,0V11Z"/>
  <path d="M13,13v11c2.294-.958,8.625-4.169,8.967-11H13Z"/>
  <path d="M11,13H2.037c.382,6.09,6.735,9.864,8.963,11V13Z"/>
</svg>

);
