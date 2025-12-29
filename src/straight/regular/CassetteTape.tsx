import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H3c-1.65,0-3,1.35-3,3v15H24V6c0-1.65-1.35-3-3-3Zm1,16h-3.8l-1.2-2H7l-1.33,2H2V6c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v13Zm-5-11H7c-1.65,0-3,1.35-3,3s1.35,3,3,3h10c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm-2.83,2c-.11,.31-.17,.65-.17,1s.06,.69,.17,1h-4.34c.11-.31,.17-.65,.17-1s-.06-.69-.17-1h4.34Zm-8.17,1c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Zm11,1c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"/></svg>

);
