import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsParagraph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,0C3.589,0,0,3.589,0,8s3.589,8,8,8h7v8h1V1h4v23h1V1h3V0H8Zm7,15h-7c-3.86,0-7-3.141-7-7S4.14,1,8,1h7v14Z"/></svg>

);
