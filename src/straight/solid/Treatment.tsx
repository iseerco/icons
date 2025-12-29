import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Treatment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.829 2a3.006 3.006 0 0 0 -2.829-2h-2a3.006 3.006 0 0 0 -2.829 2h-5.171v19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-19zm-7.829 6h3v-3h2v3h3v2h-3v3h-2v-3h-3zm5 13h-6v-2h6zm4-4h-10v-2h10z"/></svg>
);
