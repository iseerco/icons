import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceLying = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13c0,1.105-.895,2-2,2H14v-4h8c1.105,0,2,.895,2,2Zm-4.522,4c-1.617,2.41-4.365,4-7.478,4-4.962,0-9-4.037-9-9S7.038,3,12,3c3.909,0,7.235,2.51,8.475,6h1.525c.613,0,1.188,.15,1.708,.397C22.514,4.029,17.722,0,12,0,5.383,0,0,5.383,0,12s5.383,12,12,12c4.882,0,9.084-2.934,10.957-7.129-.308,.076-.625,.129-.957,.129h-2.522Zm-5.478-9c0,1.105,.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm-4,0c0-1.105-.895-2-2-2s-2,.895-2,2,.895,2,2,2,2-.895,2-2Zm2,9v-3c-3.296,0-5.891,2.284-6,2.382l1.994,2.241c.019-.017,1.872-1.623,4.005-1.623Z"/></svg>

);
