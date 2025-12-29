import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bold = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17a7,7,0,0,0-4.046-6.337A6.986,6.986,0,0,0,12,0H5A2,2,0,0,0,3,2V22a2,2,0,0,0,2,2H15A7.008,7.008,0,0,0,22,17ZM7,4h5a3,3,0,0,1,0,6H7Zm8,16H7V14h8a3,3,0,0,1,0,6Z"/></svg>

);
