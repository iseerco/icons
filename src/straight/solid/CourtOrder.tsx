import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CourtOrder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 8h-9v-2h9v-2h8v6h-8zm-1 6h10v-2h-10zm10-14h-10v2h10zm1 22h1v2h-14v-2h1v-1c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2zm4.668-7.5-.566-1.918-3.385 1 .566 1.918zm-3.951 4.5 3.385 1 .566-1.918-3.385-1zm-14-3.5.566-1.918-3.385-1-.566 1.918zm0 1.582-3.385 1 .566 1.918 3.385-1z"/></svg>
);
