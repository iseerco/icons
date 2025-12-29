import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGridAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13a5.506 5.506 0 0 0 -5.5 5.5v13a5.506 5.506 0 0 0 5.5 5.5h13a5.506 5.506 0 0 0 5.5-5.5v-13a5.506 5.506 0 0 0 -5.5-5.5zm-8.5 14v-4h4v4zm4 3v4h-4v-4zm-11-7h4v4h-4zm7-3v-4h4v4zm7 3h4v4h-4zm4-4.5v1.5h-4v-4h1.5a2.5 2.5 0 0 1 2.5 2.5zm-15.5-2.5h1.5v4h-4v-1.5a2.5 2.5 0 0 1 2.5-2.5zm-2.5 15.5v-1.5h4v4h-1.5a2.5 2.5 0 0 1 -2.5-2.5zm15.5 2.5h-1.5v-4h4v1.5a2.5 2.5 0 0 1 -2.5 2.5z"/></svg>
);
