import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM3.044,12c.518-.645,3.572-2,8.956-2s8.437,1.355,8.956,2c-.519.645-3.572,2-8.956,2S3.562,12.645,3.044,12ZM12,3a9,9,0,0,1,8.132,5.17A25.53,25.53,0,0,0,12,7,25.53,25.53,0,0,0,3.868,8.17,9,9,0,0,1,12,3Zm0,18a9,9,0,0,1-8.132-5.17A25.53,25.53,0,0,0,12,17a25.53,25.53,0,0,0,8.132-1.17A9,9,0,0,1,12,21Z"/></svg>

);
