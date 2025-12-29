import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Surprise = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm3-5a3,3,0,1,1-3-3A3,3,0,0,1,15,17ZM8.5,11A1.5,1.5,0,1,1,10,9.5,1.5,1.5,0,0,1,8.5,11ZM17,9.5A1.5,1.5,0,1,1,15.5,8,1.5,1.5,0,0,1,17,9.5Z"/></svg>

);
