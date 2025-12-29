import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPulse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19v-15.5a3.5 3.5 0 0 0 -3.5-3.5h-17a3.5 3.5 0 0 0 -3.5 3.5v15.5h10.5v2h-4.5v3h12v-3h-4.5v-2zm-21-15.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v12.5h-18zm11.7 4.5h4.3v3h-2.7l-2.989 4.483-3-6-1.011 1.517h-4.3v-3h2.7l2.989-4.483 3 6z"/></svg>
);
