import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPackage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 7v8h-2v-2.5a5.5 5.5 0 0 0 -11 0v11.5h3v-6h18v6h3v-17zm-10 5.5a2.5 2.5 0 0 1 5 0v2.5h-5zm13 2.5v-5h1v2h3v-2h1v5zm-10.5-8a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1 -3.5 3.5z"/></svg>
);
