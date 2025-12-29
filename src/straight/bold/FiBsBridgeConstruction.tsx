import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBridgeConstruction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 8h3v10.896l-1.365.123c-2.072.187-3.635 1.898-3.635 3.98v1h-3v-1c0-2.206-1.794-4-4-4h-3v-3h3c2.227 0 4.21 1.049 5.493 2.675.878-1.12 2.089-1.969 3.507-2.385v-2.29h-12v-6h3v3h3v-3h3v3h3v-3zm-14-5v-3h-3v3h-4v3h4v15h-3v3h9v-3h-3v-15h17v-3z"/></svg>
);
