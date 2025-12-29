import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShieldInterrogation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 18h-3v-3h3zm-.543 5.556c2.121-.856 9.043-4.211 9.043-11.581v-6.162a3.382 3.382 0 0 0 -2.321-3.213l-7.679-2.545-7.679 2.545a3.382 3.382 0 0 0 -2.321 3.213v6.162c0 6.515 6.851 10.449 8.953 11.5l.983.489zm5.777-18.108a.38.38 0 0 1 .266.365v6.162c0 5.26-5.034 7.9-6.932 8.7-1.926-1-7.068-4.1-7.068-8.7v-6.162a.38.38 0 0 1 .266-.365l6.734-2.233zm-5.055 7.183a4 4 0 1 0 -4.127-6.794 3.973 3.973 0 0 0 -1.552 3.163h3a1 1 0 0 1 .389-.792 1.022 1.022 0 0 1 .9-.17.976.976 0 0 1 .671.672 1 1 0 0 1 -.543 1.2 3.415 3.415 0 0 0 -1.919 3.12h3a.452.452 0 0 1 .181-.399z"/></svg>
);
