import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandMineOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,14H7v-3h10v3ZM13,0h-2V7h2V0Zm10.207,4.207l-1.414-1.414-5,5,1.414,1.414,5-5ZM7.207,7.793L2.207,2.793l-1.414,1.414,5,5,1.414-1.414Zm15.018,14.207l-.489-3.425c-.21-1.468-1.486-2.575-2.97-2.575H5.234c-1.483,0-2.76,1.107-2.97,2.575l-.489,3.425H0v2H24v-2h-1.775Z"/>
</svg>

);
