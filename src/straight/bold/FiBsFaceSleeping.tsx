import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceSleeping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,16c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm-7-5c0,1.631,1,4,3,4s3-2.369,3-4c0,0-2,1-3,1s-3-1-3-1Zm8,0c0,1.631,1,4,3,4s3-2.369,3-4c0,0-2,1-3,1s-3-1-3-1Zm7.05-3c.602,1.207,.95,2.562,.95,4,0,4.962-4.037,9-9,9S3,16.962,3,12c0-4.274,2.998-7.855,7-8.768V.181C4.334,1.137,0,6.066,0,12c0,6.617,5.383,12,12,12s12-5.383,12-12c0-1.404-.255-2.747-.7-4h-3.25ZM24,0h-5V2h2.086l-2.086,2.086v1.914h5v-2h-2.086l2.086-2.086V0Zm-7,6h-2.086l2.086-2.086v-1.914h-5v2h2.086l-2.086,2.086v1.914h5v-2Z"/></svg>

);
