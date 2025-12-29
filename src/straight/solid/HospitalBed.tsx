import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HospitalBed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm3 6h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm9 6v10c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2v-3h-20v3c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2v-20h2v7.184c.314-.112.648-.184 1-.184h3.26c1.265 1.812 3.362 3 5.74 3s4.475-1.188 5.74-3h3.26c1.654 0 3 1.346 3 3z"/></svg>
);
