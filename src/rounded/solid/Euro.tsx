import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Euro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.715 18.363a10 10 0 0 1 -17.254-3.363h10.539a1 1 0 0 0 0-2h-10.949a9.829 9.829 0 0 1 0-2h10.949a1 1 0 0 0 0-2h-10.539a10 10 0 0 1 17.254-3.363 1 1 0 0 0 1.542-1.274 11.989 11.989 0 0 0 -20.857 4.637h-1.4a1 1 0 0 0 0 2h1.051c-.028.331-.051.662-.051 1s.023.669.051 1h-1.051a1 1 0 0 0 0 2h1.4a11.989 11.989 0 0 0 20.862 4.637 1 1 0 0 0 -1.542-1.274z"/></svg>
);
