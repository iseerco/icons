import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const K = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.781,22.375l-7.543-9.429L21.832,1.555c.306-.459,.182-1.081-.277-1.387-.46-.308-1.081-.182-1.387,.277l-7.703,11.555H4V1c-.006-1.308-1.994-1.307-2,0V12.978c-.005,.015-.005,.028,0,.044v9.978c.006,1.308,1.995,1.307,2,0V14H12.519l7.7,9.625c.346,.433,.978,.499,1.405,.156,.432-.346,.501-.975,.156-1.406Z"/></svg>

);
