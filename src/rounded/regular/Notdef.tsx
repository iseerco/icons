import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,0H8C5.24,0,3,2.24,3,5v14c0,2.76,2.24,5,5,5h8c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm-2.76,12l5.65-7.77c.07,.25,.11,.5,.11,.77v14c0,.27-.05,.52-.11,.77l-5.65-7.77Zm2.76-10c.62,0,1.19,.19,1.67,.51l-5.67,7.79L6.33,2.51c.48-.32,1.05-.51,1.67-.51h8ZM5.11,19.77c-.07-.25-.11-.5-.11-.77V5c0-.27,.05-.52,.11-.77l5.65,7.77-5.65,7.77Zm2.89,2.23c-.62,0-1.19-.19-1.67-.51l5.67-7.79,5.67,7.79c-.48,.32-1.05,.51-1.67,.51H8Z"/></svg>

);
