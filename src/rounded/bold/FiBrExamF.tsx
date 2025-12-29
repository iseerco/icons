import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExamF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.381 0h-10.881c-1.93 0-3.5 1.57-3.5 3.5v20.5h20v-18.335zm-11.381 21v-17.5c0-.276.224-.5.5-.5h8.5v5h5v13zm2-10h4.5v1.6h-2.9v1.801h2.9v1.6h-2.9v3h-1.6zm6 3.4h4v1.6h-4z"/></svg>
);
