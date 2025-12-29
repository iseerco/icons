import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EiffelTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.662,13c.596-1.038,1.038-2.03,1.38-3h-1.043v-2h1.608c.283-1.335,.392-2.65,.392-4v-.5h-1V1.5h1V0h2V1.5h1V3.5h-1v.5c0,1.35,.11,2.665,.392,4h1.608v2h-1.043c.342,.97,.784,1.962,1.38,3h-6.675Zm9.338,3.777v-1.777H6v1.777c-1.244,1.515-3.094,3.437-5,5.223v2H7c0-2.761,2.239-5,5-5s5,2.239,5,5h6v-2c-1.906-1.787-3.756-3.709-5-5.223Z"/>
</svg>

);
