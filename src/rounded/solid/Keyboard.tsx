import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Keyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,6H13V3a1,1,0,0,0-2,0V6H5a5.006,5.006,0,0,0-5,5v4a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V11A5.006,5.006,0,0,0,19,6Zm-9,4h1a1,1,0,0,1,0,2H10a1,1,0,0,1,0-2ZM5,16a1,1,0,1,1,1-1A1,1,0,0,1,5,16Zm1-4H5a1,1,0,0,1,0-2H6a1,1,0,0,1,0,2Zm9,4H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,19,16Zm0-4H15a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/></svg>

);
