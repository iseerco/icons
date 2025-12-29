import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Underline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_12_underlined" data-name="12 underlined"><path d="M12,20a8.009,8.009,0,0,1-8-8V0H6V12a6,6,0,0,0,12,0V0h2V12A8.009,8.009,0,0,1,12,20Z"/><rect y="22" width="24" height="2"/></g></svg>

);
