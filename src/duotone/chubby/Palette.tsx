import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Palette = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 1c-5.121 0-11 1.25-11 11s5.879 11 11 11c.432 0 .854-.01 1.266-.032 1.523-.081 2.714-1.369 2.711-2.931v-.02c0-2.833 1.185-3.371 3.371-3.371.188 0 .372.005.551.016 1.522.102 2.853-1.067 3.004-2.585.064-.648.098-1.347.098-2.077-.001-9.75-5.88-11-11.001-11z" opacity=".5"/><circle cx="11.34" cy="6.298" r="1"/><circle cx="16.957" cy="8.755" r="1"/><circle cx="6.585" cy="9.84" r="1"/><circle cx="7.585" cy="15.681" r="1"/></svg>
);
