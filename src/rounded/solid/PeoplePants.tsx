import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeoplePants = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,2.5C2.5,1.12,3.62,0,5,0s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm3.5,3.5h-2C1.79,6,0,7.79,0,10v3c0,1.48,.81,2.77,2,3.46v6.54c0,.55,.45,1,1,1s1-.45,1-1v-6h2v6c0,.55,.45,1,1,1s1-.45,1-1v-6.54c1.19-.69,2-1.99,2-3.46v-3c0-2.21-1.79-4-4-4Zm13-1c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm1,1h-2c-2.21,0-4,1.79-4,4v3c0,1.48,.81,2.77,2,3.46v6.54c0,.55,.45,1,1,1s1-.45,1-1v-6h2v6c0,.55,.45,1,1,1s1-.45,1-1v-6.54c1.19-.69,2-1.99,2-3.46v-3c0-2.21-1.79-4-4-4Z"/></svg>

);
