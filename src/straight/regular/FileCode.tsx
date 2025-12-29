import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414ZM4,22V3c0-.551,.449-1,1-1H13v7h7v13H4Zm6.774-8.703l-2.778,2.778,2.734,2.718-1.414,1.414-2.734-2.734c-.775-.775-.775-2.037,0-2.812l2.778-2.778,1.414,1.414Zm6.71,1.364c.774,.775,.774,2.037,0,2.812l-2.734,2.734-1.414-1.414,2.734-2.734-2.778-2.762,1.414-1.414,2.778,2.778Z"/></svg>

);
