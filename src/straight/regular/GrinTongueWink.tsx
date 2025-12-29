import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,10v1H14V10a2,2,0,0,1,4,0ZM10,9H6v2h4Zm14,3A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12Zm-2,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12ZM7,14H17v2H15v.6A3.237,3.237,0,0,1,12,20a3.237,3.237,0,0,1-3-3.4V16H7Zm6,2H11v.6c0,.662.411,1.4,1,1.4s1-.738,1-1.4Z"/></svg>

);
