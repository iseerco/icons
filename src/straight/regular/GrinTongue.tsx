import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM7,16H9v.6A3.237,3.237,0,0,0,12,20a3.237,3.237,0,0,0,3-3.4V16h2V14H7Zm6,.6c0,.662-.411,1.4-1,1.4s-1-.738-1-1.4V16h2ZM7,9.5A1.5,1.5,0,1,1,8.5,11,1.5,1.5,0,0,1,7,9.5Zm10,0A1.5,1.5,0,1,1,15.5,8,1.5,1.5,0,0,1,17,9.5Z"/></svg>

);
