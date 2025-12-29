import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandstand = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 13.675v-13.675h-3v6h-2v-6h-3v13.675l-4.693 10.325h3.295l3.182-7h4.432l3.182 7h3.295zm-3-4.675v5h-2v-5zm1.5 12.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5z"/></svg>
);
