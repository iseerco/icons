import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Zm0-15.25c-2.762,0-5.008,2.26-5.008,5.037v2.426c0,2.777,2.247,5.037,5.008,5.037s4.992-2.26,4.992-5.037v-2.426c0-2.777-2.239-5.037-4.992-5.037Zm1.992,7.463c0,1.143-.875,2.037-1.992,2.037-1.126,0-2.008-.895-2.008-2.037v-2.426c0-1.143.882-2.037,2.008-2.037,1.117,0,1.992.895,1.992,2.037v2.426Z"/></svg>

);
