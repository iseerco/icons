import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExamD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.382 0h-10.882c-1.93 0-3.5 1.57-3.5 3.5v20.5h20v-18.335zm-11.382 21v-17.5c0-.276.224-.5.5-.5h8.5v5h5v13zm10.8-6.8h1.2v1.6h-1.2v1.2h-1.6v-1.2h-1.2v-1.6h1.2v-1.2h1.6zm-6.3-3.2h-2.5v8h2.5c1.381 0 2.5-1.119 2.5-2.5v-3c0-1.381-1.119-2.5-2.5-2.5zm.9 5.5c0 .496-.404.9-.9.9h-.9v-4.8h.9c.496 0 .9.404.9.9z"/></svg>
);
