import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleQ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.992,13.39v-2.779c0-2.68-2.239-4.86-4.992-4.86s-5.008,2.181-5.008,4.86v2.779c0,2.68,2.246,4.86,5.008,4.86.904,0,1.752-.235,2.484-.645l.956.956,2.121-2.121-1.023-1.023c.292-.617.455-1.304.455-2.026Zm-4.992,1.86c-1.107,0-2.008-.835-2.008-1.86v-2.779c0-1.025.9-1.86,2.008-1.86,1.117,0,1.992.817,1.992,1.86v2.261l-.432-.432-2.121,2.121.686.686c-.041.002-.083.004-.125.004Zm0-15.25C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Z"/></svg>

);
