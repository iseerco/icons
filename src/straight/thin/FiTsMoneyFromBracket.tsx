import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMoneyFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,7c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Z"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="20" r="1"/><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5v5.5H4V24H20V8h4V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,7h-3V3h-1V23H5V3h-1V7H1V2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V7Z"/></svg>

);
