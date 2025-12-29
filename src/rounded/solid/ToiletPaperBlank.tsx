import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletPaperBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,0h9.868c-1.273,2.009-1.868,5.262-1.868,8.5v10.5c0,2.757-2.243,5-5,5H1.654c-.912,0-1.654-.742-1.654-1.654,0-.678,.437-1.289,1.112-1.559,1.146-.459,1.888-1.553,1.888-2.787V7.5C3,3.294,5.196,0,8,0ZM24,8.5c0,4.694-1.343,8.5-3,8.5s-3-3.806-3-8.5S19.343,0,21,0s3,3.806,3,8.5Zm-2,0c0-1.105-.448-2-1-2s-1,.895-1,2,.448,2,1,2,1-.895,1-2Z"/></svg>

);
