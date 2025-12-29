import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.109,12.488L21.916,.777c.153-.23,.091-.54-.139-.693-.231-.153-.541-.092-.693,.139l-7.852,11.777H3V.5c.01-.649-1.01-.649-1,0V12.437c-.006,.041-.006,.085,0,.126v10.937c-.01,.649,1.01,.649,1,0V13H13.246l7.85,10.794c.163,.225,.477,.272,.698,.11,.224-.162,.273-.475,.11-.698l-7.795-10.718Z"/></svg>

);
