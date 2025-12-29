import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBriefcaseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,3h-.63c-.45-1.72-2.01-3-3.87-3h-4c-1.86,0-3.43,1.28-3.87,3h-.63C2.47,3,0,5.47,0,8.5v10c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V8.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,15.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5V8.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v10Z"/></svg>

);
