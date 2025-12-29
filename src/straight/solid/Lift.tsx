import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lift = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 16-3-3h6zm0-8-3 3h6zm-12-8h-6c-1.654 0-3 1.346-3 3v21h9zm11 6.171v-3.171c0-1.654-1.346-3-3-3h-6v24h9v-6.171l-4-4v-3.657l4-4z"/></svg>
);
