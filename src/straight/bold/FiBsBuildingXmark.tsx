import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBuildingXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 21h9v3h-12v-20.5c0-1.93 1.57-3.5 3.5-3.5h11c1.93 0 3.5 1.57 3.5 3.5v8.5h-3v-8.5c0-.275-.224-.5-.5-.5h-11c-.276 0-.5.225-.5.5zm2-3h3v-3h-3zm5 0h3v-3h-3zm-2-8h-3v3h3zm2 3h3v-3h-3zm-2-8h-3v3h3zm2 3h3v-3h-3zm13.989 8.163-2.121-2.121-2.853 2.853-2.853-2.853-2.121 2.121 2.853 2.853-2.853 2.853 2.121 2.121 2.853-2.853 2.853 2.853 2.121-2.121-2.853-2.853z"/></svg>
);
