import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,16h2v.6c-.062,1.839-1.939,1.837-2,0Zm13-4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM6,11h4V9H6Zm11,3H7v2H9v.6c.133,4.495,5.87,4.49,6,0V16h2Zm1-4a2,2,0,0,0-4,0v1h4Z"/></svg>

);
