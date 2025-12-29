import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0h-8.758c-.922,0-1.823.374-2.475,1.025l-3.242,3.242c-.661.662-1.025,1.541-1.025,2.475v17.257h18V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H4V6.743c0-.667.26-1.295.732-1.768l3.242-3.242c.465-.465,1.109-.732,1.768-.732h8.758c.827,0,1.5.673,1.5,1.5v20.5Zm-3-20h1v4h-1V3Zm-2,0h1v4h-1V3Zm-2,0h1v4h-1V3Zm-2,0h1v4h-1V3Zm-2,0h1v4h-1V3Z"/>
</svg>

);
