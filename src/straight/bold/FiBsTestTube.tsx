import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTestTube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0h-14v3h2v16a5 5 0 0 0 10 0v-16h2zm-7 21a2 2 0 0 1 -2-2v-9h4v9a2 2 0 0 1 -2 2zm2-14h-4v-4h4z"/></svg>
);
