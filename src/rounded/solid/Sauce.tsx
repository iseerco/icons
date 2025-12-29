import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.974,16h4v2h-4ZM20,15v4a5.006,5.006,0,0,1-5,5H9a5.006,5.006,0,0,1-5-5V15a5.006,5.006,0,0,1,5-5h6A5.006,5.006,0,0,1,20,15Zm-4.026,0a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1ZM9,8c1.5.077,6.638-.233,8,.295.206-2.139-.985-3.486-3.167-3.295L13.164.986a1.18,1.18,0,0,0-2.328,0L10.167,5C7.984,4.809,6.8,6.157,7,8.3A6.956,6.956,0,0,1,9,8Z"/></svg>

);
