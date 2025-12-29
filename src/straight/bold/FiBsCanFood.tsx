import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCanFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C6.477,0,2,1.343,2,3v16.95c0,2.989,5.387,4.05,10,4.05s10-1.061,10-4.05V3c0-1.657-4.477-3-10-3Zm7,5.142v1.559c-.608.488-3.096,1.299-7,1.299s-6.394-.811-7-1.299v-1.559c1.804.531,4.274.858,7,.858s5.196-.327,7-.858Zm0,9.559c-.608.488-3.096,1.299-7,1.299s-6.394-.811-7-1.299v-4.699c1.956.707,4.584.998,7,.998s5.044-.291,7-.998v4.699Zm-7,6.299c-3.905,0-6.393-.812-7-1.299v-1.699c1.956.707,4.584.998,7,.998s5.044-.291,7-.998v1.699c-.607.487-3.095,1.299-7,1.299Z"/>
</svg>

);
