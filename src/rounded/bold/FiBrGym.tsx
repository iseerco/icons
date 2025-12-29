import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGym = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.8 5.983-1.333-1.329 1.094-1.093a1.5 1.5 0 0 0 -2.122-2.122l-1.093 1.094-1.329-1.333a4.11 4.11 0 1 0 -5.817 5.817l1.329 1.329-5.183 5.187-1.329-1.333a4.11 4.11 0 1 0 -5.817 5.817l1.329 1.329-1.09 1.093a1.5 1.5 0 0 0 2.122 2.122l1.093-1.094 1.329 1.333a4.11 4.11 0 1 0 5.817-5.817l-1.329-1.328 5.188-5.188 1.324 1.333a4.11 4.11 0 1 0 5.817-5.817zm-13.125 14.691a1.139 1.139 0 0 1 -1.571 0l-4.779-4.774a1.111 1.111 0 0 1 1.575-1.575l4.775 4.775a1.111 1.111 0 0 1 0 1.57zm11-11a1.139 1.139 0 0 1 -1.571 0l-4.779-4.774a1.111 1.111 0 0 1 1.575-1.575l4.775 4.775a1.111 1.111 0 0 1 0 1.57z"/></svg>
);
