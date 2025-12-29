import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleBookOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,8.727v5.333c0,.892-.591,1.677-1.449,1.923l-3.551,1.018v-7.583c0-.912.603-1.714,1.479-1.967l1.316-.381c1.104-.319,2.205.509,2.205,1.658Zm-8.479-1.277l-1.316-.381c-1.104-.319-2.205.509-2.205,1.658v5.333c0,.892.591,1.677,1.449,1.923l3.551,1.018v-7.583c0-.912-.603-1.714-1.479-1.967Zm14.479,4.55c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.037,9-9Z"/></svg>

);
