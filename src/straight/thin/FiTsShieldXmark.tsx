import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShieldXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.212,2.798L12,.076,3.788,2.798c-1.069.355-1.788,1.349-1.788,2.473v6.664c0,6.611,7.16,10.703,9.354,11.8l.626.313.65-.262c2.817-1.133,9.37-4.545,9.37-11.744v-6.771c0-1.125-.719-2.118-1.788-2.473Zm.788,9.244c0,6.589-6.346,9.854-8.975,10.91-2.065-1.032-9.025-4.98-9.025-11.018v-6.664c0-.692.443-1.305,1.103-1.523l7.897-2.618,7.897,2.618c.659.219,1.103.831,1.103,1.523v6.771Zm-4.646-4.195l-3.646,3.646,3.646,3.646-.707.707-3.646-3.646-3.646,3.646-.707-.707,3.646-3.646-3.646-3.646.707-.707,3.646,3.646,3.646-3.646.707.707Z"/>
</svg>

);
