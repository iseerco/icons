import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,23.942c-2.307-1.178-9-5.158-9-11.573v-5.774c0-2.159,1.377-4.066,3.427-4.746l5.573-1.848v23.942ZM18.573,1.848l-5.573-1.848v24c2.369-.992,9-4.419,9-11.632v-5.774c0-2.159-1.377-4.066-3.427-4.746Z"/>
</svg>

);
