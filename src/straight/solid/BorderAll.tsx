import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BorderAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,3V11H13V2h8c.55,0,1,.45,1,1ZM3,2H11V11H2V3c0-.55,.45-1,1-1Zm-1,11H11v9H2V13Zm11,9V13h9v9H13Z"/></svg>

);
