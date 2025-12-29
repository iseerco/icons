import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTired = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.5,12a1.5,1.5,0,0,1-.9-2.7L7,9l-.4-.3A1.5,1.5,0,0,1,8.4,6.3l2,1.5a1.51,1.51,0,0,1,0,2.4l-2,1.5A1.5,1.5,0,0,1,7.5,12Zm10.2-.6a1.5,1.5,0,0,0-.3-2.1L17,9l.4-.3a1.5,1.5,0,1,0-1.8-2.4l-2,1.5a1.51,1.51,0,0,0,0,2.4l2,1.5a1.5,1.5,0,0,0,2.1-.3ZM24,12A12.013,12.013,0,0,0,12,0C-3.9.6-3.893,23.4,12,24A12.013,12.013,0,0,0,24,12Zm-3,0a9.01,9.01,0,0,1-9,9C.076,20.548.081,3.45,12,3A9.01,9.01,0,0,1,21,12Zm-4.3,3.614c-2.6-3.445-6.815-3.441-9.407,0a1.239,1.239,0,0,0,1.335,1.975,9.943,9.943,0,0,1,6.737,0A1.239,1.239,0,0,0,16.7,15.614Z"/></svg>

);
