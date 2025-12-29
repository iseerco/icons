import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 5.5v-2h-3v-.5c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v.5h-3v2h3v5.5h-3v2h3v5.5h-3v2h3v.5c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-.5h3v-2h-3v-5.5h3v-2h-3v-5.5zm-5 9.5h-8v-6h8zm-7-13h6c.551 0 1 .448 1 1v4h-8v-4c0-.552.449-1 1-1zm6 20h-6c-.551 0-1-.448-1-1v-4h8v4c0 .552-.449 1-1 1z"/></svg>
);
