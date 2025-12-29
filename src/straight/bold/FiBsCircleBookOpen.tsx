import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleBookOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,9.417v7.583l-5-1.434v-6.84c0-1.149,1.102-1.977,2.205-1.658l1.316.381c.876.253,1.479,1.055,1.479,1.967Zm4.795-2.348l-1.316.381c-.876.253-1.479,1.055-1.479,1.967v7.583l5-1.434v-6.84c0-1.149-1.102-1.977-2.205-1.658Zm8.205,4.931c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.037,9-9Z"/></svg>

);
