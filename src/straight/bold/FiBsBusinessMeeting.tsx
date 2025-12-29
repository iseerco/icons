import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBusinessMeeting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 6.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm5 7c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v4c0 1.381 1.119 2.5 2.5 2.5h3.5v4h3v-7h-4zm16.5-4.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5v3.5h-4v7h3v-4h3.5c1.381 0 2.5-1.119 2.5-2.5v-4c0-1.381-1.119-2.5-2.5-2.5zm-4.5 1h-10v3h10zm3 12h4v-3h-4zm-20 0h4v-3h-4zm17-14h-10v-6c0-1.103.897-2 2-2v-.5c0-.828.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5v.5c1.103 0 2 .897 2 2zm-3-5h-4v2h4z"/></svg>
);
