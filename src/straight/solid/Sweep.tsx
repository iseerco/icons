import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sweep = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.5 5.5-2 1-1 2-1-2-2-1 2-1 1-2 1 2zm-19 1.5 1.167-2.333 2.333-1.167-2.333-1.167-1.167-2.333-1.167 2.333-2.333 1.167 2.333 1.167zm16.5 7v-1c0-1.654-1.346-3-3-3h-5v-10h-2v10h-5c-1.654 0-3 1.346-3 3v1zm-4 2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-4v4c0 1.103-.897 2-2 2v2h16c2.206 0 4-1.794 4-4v-4z"/></svg>
);
