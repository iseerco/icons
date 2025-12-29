import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellSchool = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 7a3 3 0 1 0 .624 5.933 12.019 12.019 0 0 1 -10.624 9.025v-2.029a10 10 0 0 0 7.905-5.4 4.978 4.978 0 0 1 0-9.052 10 10 0 1 0 -9.905 14.472v4.051h1a14.015 14.015 0 0 0 14-14 3 3 0 0 0 -3-3zm-11 1a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"/></svg>
);
