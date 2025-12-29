import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseUnlock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 14v-1c0-1.103.897-2 2-2 .737 0 1.375.405 1.722 1h2.136c-.447-1.72-1.999-3-3.858-3-2.206 0-4 1.794-4 4v1h-2v7c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-7zm3 6h-2v-2h2zm3.045-13h-4.045c-2.968 0-5.439 2.166-5.917 5h-2.083v9c0 1.13.391 2.162 1.026 3h-11.026v-13.926c0-.958.433-1.847 1.187-2.439l8.905-6.976c1.123-.881 2.693-.881 3.816 0z"/></svg>
);
