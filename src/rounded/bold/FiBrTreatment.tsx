import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTreatment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 10.5a1.5 1.5 0 0 1 1.5-1.5h1v-1a1.5 1.5 0 0 1 3 0v1h1a1.5 1.5 0 0 1 0 3h-1v1a1.5 1.5 0 0 1 -3 0v-1h-1a1.5 1.5 0 0 1 -1.5-1.5zm7.5 5.5h-7a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3zm6.5-8.5v11a5.506 5.506 0 0 1 -5.5 5.5h-9a5.506 5.506 0 0 1 -5.5-5.5v-11a5.507 5.507 0 0 1 5.337-5.5 3.5 3.5 0 0 1 3.163-2h3a3.5 3.5 0 0 1 3.163 2 5.507 5.507 0 0 1 5.337 5.5zm-3 0a2.5 2.5 0 0 0 -2.5-2.5h-1a1.5 1.5 0 0 1 -1.5-1.5.5.5 0 0 0 -.5-.5h-3a.5.5 0 0 0 -.5.5 1.5 1.5 0 0 1 -1.5 1.5h-1a2.5 2.5 0 0 0 -2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5z"/></svg>
);
