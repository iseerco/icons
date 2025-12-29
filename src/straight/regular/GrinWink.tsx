import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm6-12v1H14V10a2,2,0,0,1,4,0Zm-8,1H6V9h4Zm1.993,4A21.923,21.923,0,0,0,18,14c-.615,2.28-2.664,5-6,5s-5.392-2.72-6.007-5A21.841,21.841,0,0,0,11.993,15Z"/></svg>

);
