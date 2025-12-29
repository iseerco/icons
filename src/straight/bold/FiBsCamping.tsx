import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCamping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M256.007,0.131L10.592,404.684l-0.192,0.319c-19.897,33.686-8.718,77.124,24.968,97.021  c10.908,6.443,23.344,9.843,36.013,9.845h369.25c39.123-0.008,70.832-31.731,70.824-70.854c-0.003-12.794-3.47-25.349-10.035-36.331  L256.007,0.131z M446.657,444.521c-1.192,2.204-3.52,3.553-6.026,3.492H350.14l-94.133-150.046l-94.154,150.046H71.382  c-3.845-0.007-6.957-3.13-6.949-6.976c0.002-1.197,0.313-2.373,0.902-3.415l190.672-314.252l190.608,314.231  C447.91,439.722,447.926,442.385,446.657,444.521z"/>
</svg>

);
