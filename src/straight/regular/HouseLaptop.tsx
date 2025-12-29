import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseLaptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,16h2v2H0V7.84c0-.93,.42-1.79,1.15-2.36L7.15,.78c1.09-.85,2.61-.85,3.7,0l3.15,2.47V1h2v3.82l.85,.66c.73,.57,1.15,1.43,1.15,2.36v.16h-2v-.16c0-.31-.14-.6-.38-.79L9.62,2.36c-.36-.29-.87-.28-1.23,0L2.38,7.06c-.24,.19-.38,.48-.38,.79v8.16Zm22,2v3c0,1.65-1.35,3-3,3H9c-1.65,0-3-1.35-3-3v-3h1v-5c0-1.65,1.35-3,3-3h10c1.65,0,3,1.35,3,3v5h1Zm-15,0h3.41l1,1h3.17l1-1h3.41v-5c0-.55-.45-1-1-1H10c-.55,0-1,.45-1,1v5Zm13,2h-3.59l-1,1h-4.83l-1-1h-3.59v1c0,.55,.45,1,1,1h12c.55,0,1-.45,1-1v-1Z"/></svg>

);
