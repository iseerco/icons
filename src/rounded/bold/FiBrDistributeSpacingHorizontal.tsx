import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDistributeSpacingHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,24c-.83,0-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5V22.5c0,.83-.67,1.5-1.5,1.5Zm-15.5-1.5V1.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5V22.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5Zm12-6.5V8c0-2.21-1.79-4-4-4h-2c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4h2c2.21,0,4-1.79,4-4ZM13,7c.55,0,1,.45,1,1v8c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1V8c0-.55,.45-1,1-1h2Z"/></svg>

);
