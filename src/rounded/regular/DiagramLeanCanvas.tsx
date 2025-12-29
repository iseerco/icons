import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramLeanCanvas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5Zm3,5V15h-3V4c1.65,0,3,1.35,3,3Zm-7,8v-4h2v4h-2Zm-8,0v-4h2v4h-2ZM17,4v5h-2V4h2Zm-4,0V15h-2V4h2Zm-4,0v5h-2V4h2Zm-4,0V15H2V7c0-1.65,1.35-3,3-3Zm0,16c-1.65,0-3-1.35-3-3H11v3H5Zm14,0h-6v-3h9c0,1.65-1.35,3-3,3Z"/></svg>

);
