import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBackpack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 13h-6v-3h6zm8 1v5.5a4.505 4.505 0 0 1 -4.5 4.5h-13a4.505 4.505 0 0 1 -4.5-4.5v-5.5h2v-1a9 9 0 0 1 5-8.05v-.95a4 4 0 0 1 8 0v.95a9 9 0 0 1 5 8.05v1zm-17-1v4.726a7.966 7.966 0 0 1 12 0v-4.726a6 6 0 0 0 -12 0zm6 5a5 5 0 0 0 -4.576 3h9.152a5 5 0 0 0 -4.576-3z"/></svg>
);
