import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 24.024-8-4.8v-4.686l-7-8.5v-2.538a3.5 3.5 0 0 1 3.5-3.5h15a3.5 3.5 0 0 1 3.5 3.5v2.538l-7 8.5zm-5-6.5 2 1.2v-5.262l7-8.5v-1.462a.5.5 0 0 0 -.5-.5h-15a.5.5 0 0 0 -.5.5v1.462l7 8.5z"/></svg>
);
