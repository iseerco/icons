import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGridDividers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1H0V0H24V1Zm0,11H0v1H24v-1ZM6,4H0v6H6V4ZM1,5H5v4H1V5Zm14-1h-6v6h6V4Zm-5,1h4v4h-4V5Zm14-1h-6v6h6V4Zm-5,1h4v4h-4V5ZM6,16H0v6H6v-6Zm-5,1H5v4H1v-4Zm14-1h-6v6h6v-6Zm-5,1h4v4h-4v-4Zm14-1h-6v6h6v-6Zm-5,1h4v4h-4v-4Z"/></svg>

);
