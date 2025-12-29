import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6v-3H0v3h1v12H0v3h24v-3h-1V6h1Zm-4,12H4V6h16v12Zm-2-2h-3v-8h3v8Zm-4.5,0h-3v-8h3v8Zm-7.5,0v-8h3v8h-3Z"/>
</svg>

);
