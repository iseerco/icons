import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Euro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 22a10.016 10.016 0 0 1 -9.539-7h11.539v-2h-11.949a9.829 9.829 0 0 1 0-2h11.949v-2h-11.539a10 10 0 0 1 17.254-3.363l1.542-1.274a11.989 11.989 0 0 0 -20.857 4.637h-2.4v2h2.051c-.028.331-.051.662-.051 1s.023.669.051 1h-2.051v2h2.4a11.989 11.989 0 0 0 20.862 4.637l-1.542-1.274a9.977 9.977 0 0 1 -7.72 3.637z"/></svg>
);
