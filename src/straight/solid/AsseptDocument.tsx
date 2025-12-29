import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AsseptDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-5.389 6.536-1.411-1.414-3.59 3.585a1.022 1.022 0 0 1 -1.413 0l-1.586-1.585-1.411 1.414 1.585 1.585a3 3 0 0 0 4.243 0z"/></svg>
);
