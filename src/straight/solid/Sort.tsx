import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sort = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M22.243,10.021H1.757l8.4-9.183a2.572,2.572,0,0,1,3.69.007Z"/><path d="M12,24.011a2.488,2.488,0,0,1-1.849-.826L1.757,14.011H22.243l-8.4,9.181A2.476,2.476,0,0,1,12,24.011Z"/></g></svg>

);
