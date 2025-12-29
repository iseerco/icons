import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTimeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 12.5v-1h-5v-4.551c1.692-.245 3-1.691 3-3.449 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.758 1.308 3.204 3 3.449v4.551h-12v-4.551c1.692-.245 3-1.691 3-3.449 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.758 1.308 3.204 3 3.449v4.551h-5v1h11.5v4.551c-1.692.245-3 1.691-3 3.449 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.758-1.308-3.204-3-3.449v-4.551zm-8-9c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5-2.5-1.121-2.5-2.5zm-13 0c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5-2.5-1.121-2.5-2.5zm11.5 17c0 1.379-1.122 2.5-2.5 2.5s-2.5-1.121-2.5-2.5 1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5z"/></svg>
);
