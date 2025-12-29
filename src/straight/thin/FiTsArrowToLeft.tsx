import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5H2.207L7.854,5.854l-.707-.707L1,11.293V5H0v14H1v-6.293l6.146,6.146,.707-.707L2.207,12.5H24v-1Z"/></svg>

);
