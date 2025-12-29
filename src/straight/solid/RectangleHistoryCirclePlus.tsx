import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleHistoryCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,2H6V0h12v2Zm3,3H3v2h18v-2Zm3,13c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2-1h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Zm-12,1c0-4.418,3.582-8,8-8H3c-1.654,0-3,1.346-3,3v11h12.721c-1.665-1.466-2.721-3.607-2.721-6Z"/>
</svg>

);
