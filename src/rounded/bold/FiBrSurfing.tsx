import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSurfing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.64.005c-3.783 0-8.046 2.006-11.4 5.365a37.3 37.3 0 0 0 -7.892 11.487 4.349 4.349 0 0 0 .927 4.811l1.057 1.057a4.345 4.345 0 0 0 4.806.928 37.171 37.171 0 0 0 11.492-7.887c3.359-3.36 5.37-7.623 5.37-11.406a4 4 0 0 0 -4.36-4.355zm-3.131 13.64a34.193 34.193 0 0 1 -10.552 7.255 1.345 1.345 0 0 1 -.81.078l11.414-11.417a1.5 1.5 0 0 0 -2.122-2.122l-11.412 11.413a1.363 1.363 0 0 1 .078-.811 34.249 34.249 0 0 1 7.251-10.55c3.308-3.307 6.964-4.486 9.284-4.486 1.077 0 1.36.278 1.36 1.355 0 2.32-1.184 5.977-4.491 9.285z"/></svg>
);
