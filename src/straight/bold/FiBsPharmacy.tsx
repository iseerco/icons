import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPharmacy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 24h-8v-8h-8v-8h8v-8h8v8h8v8h-8zm-5-3h2v-8h8v-2h-8v-8h-2v8h-8v2h8z"/></svg>
);
