import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCraneBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 6v-3h-17v-3h-3v3h-4v3h4v15h-3v3h9v-3h-3v-15h9.708l-3.273 4h-1.435v3h12v-3h-1.435l-3.273-4zm-7.981 4 1.981-2.421 1.981 2.421h-3.961zm-4.019 14h12v-9h-12zm7-6h3v3h-3zm-5 0h3v3h-3z"/></svg>
);
