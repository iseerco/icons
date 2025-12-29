import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Goalkeeper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.659 12.244-3.799-5.97 2.39-1.274h4.75v-2h-5.25l-6.543 3.488c-.926.493-1.71 1.225-2.268 2.118l-1.494 2.394h-3.445v2h4.555l2.081-3.334c.006-.01.014-.019.021-.029l6.343 10.15v4.213h2v-4.787l-2.309-3.695 2.165-1.377 3.145 2.359v5.5h2v-6.5l-4.341-3.256zm-12.162-9.744c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-3.497 6.5c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"/></svg>
);
