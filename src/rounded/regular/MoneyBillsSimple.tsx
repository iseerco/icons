import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyBillsSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,3H8c-2.21,0-4,1.79-4,4v6c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V7c0-2.21-1.79-4-4-4Zm2,10c0,1.1-.9,2-2,2H8c-1.1,0-2-.9-2-2V7c0-1.1,.9-2,2-2h12c1.1,0,2,.9,2,2v6Zm-3,7c0,.55-.45,1-1,1H5c-2.76,0-5-2.24-5-5v-7c0-.55,.45-1,1-1s1,.45,1,1v7c0,1.65,1.35,3,3,3h13c.55,0,1,.45,1,1ZM14,7c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm0,4c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"/></svg>

);
