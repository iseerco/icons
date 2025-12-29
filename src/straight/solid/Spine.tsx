import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 11h3v2h-3v2h-12v-2h-3v-2h3v-2h12zm0 6h-12v2.5h-3v2h3.051c.24 1.416 1.466 2.5 2.949 2.5h6c1.483 0 2.71-1.084 2.949-2.5h3.051v-2h-3zm-.051-14.5c-.24-1.416-1.466-2.5-2.949-2.5h-6c-1.483 0-2.71 1.084-2.949 2.5h-3.051v2h3v2.5h12v-2.5h3v-2z"/></svg>
);
