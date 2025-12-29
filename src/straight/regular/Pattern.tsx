import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pattern = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,22H2V3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22ZM5,7.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm14,2.5h-5V5h5v5Zm-11.54,3.5l3,3-3,3-3-3,3-3Zm9.04,.5l3.12,5h-6.25l3.12-5Z"/></svg>

);
