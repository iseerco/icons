import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDecisionChoice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,9.999h6.122l3.999-3.999-4-4h-6.121V0h-3V2H2v7.999H10.5v3.001H4.379L.379,17l4,4h6.121v3h3v-3h8.5V13H13.5v-3.001Zm-4.347-5.292l1.414-1.414,1.414,1.414,1.414-1.414,1.414,1.414-1.414,1.414,1.414,1.414-1.414,1.414-1.414-1.414-1.414,1.414-1.414-1.414,1.414-1.414-1.414-1.414Zm6.847,11.213l-2.943,3.032h0l-.004,.004c-.744,.744-2.058,.746-2.823-.019l-1.703-1.789,1.387-1.441,1.737,1.822,2.95-3.039,1.398,1.43Z"/>
</svg>

);
