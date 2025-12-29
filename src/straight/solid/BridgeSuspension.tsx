import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BridgeSuspension = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,5.358V3.199c-2.335-1.088-3.076-3.095-3.113-3.199h-1.771c-.055,.155-1.47,4-7.116,4S4.939,.148,4.887,0h-1.771c-.038,.109-.781,2.111-3.116,3.199v2.159c1.291-.455,2.268-1.1,3-1.763v7.405H0v6.93l.835,.14c2.413,.404,4.165,2.479,4.165,4.931v1h2v-1c0-2.757,2.243-5,5-5s5,2.243,5,5v1h2v-1c0-2.452,1.752-4.526,4.165-4.931l.835-.14v-6.93h-3V3.595c.732,.663,1.709,1.308,3,1.763Zm-13,5.642H5V3.595c1.21,1.105,3.116,2.145,6,2.35v5.055Zm8,0h-6V5.945c2.884-.205,4.79-1.244,6-2.35v7.405Z"/>
</svg>

);
