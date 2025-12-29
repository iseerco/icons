import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Key = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 0h-1.436a2.978 2.978 0 0 0 -2.121.879l-8.527 8.521a7.518 7.518 0 1 0 4.684 4.684l2.4-2.4v-3.684h3v-3h3.551a2.978 2.978 0 0 0 .449-1.564v-1.436a2 2 0 0 0 -2-2zm-16.5 20a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5z"/></svg>
);
