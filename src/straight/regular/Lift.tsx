import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lift = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 22h-7v-20h6c.552 0 1 .449 1 1v5.172l2-2v-3.171c0-1.654-1.346-3-3-3h-14c-1.654-.001-3 1.345-3 2.999v21h20v-6.171l-2-2v6.172zm-16-19c0-.551.449-1 1-1h6v20h-7zm16 10h6l-3 3zm0-2 3-3 3 3z"/></svg>
);
