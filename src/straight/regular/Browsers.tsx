import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browsers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H8c-1.65,0-3,1.35-3,3v13H24V5c0-1.65-1.35-3-3-3Zm-13,2h13c.55,0,1,.45,1,1v1H7v-1c0-.55,.45-1,1-1Zm-1,12V8h15v8H7Zm-5,4H19v2H0V9c0-1.65,1.35-3,3-3v2c-.55,0-1,.45-1,1v11Z"/></svg>

);
