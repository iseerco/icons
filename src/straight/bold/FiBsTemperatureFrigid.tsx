import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTemperatureFrigid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,16.037a3,3,0,1,1-4.5-2.6v-5.4h3v5.4A3,3,0,0,1,19,16.037ZM24,16A8,8,0,0,1,8,16a7.907,7.907,0,0,1,2-5.271V6.037a6,6,0,0,1,12,0v4.692A7.907,7.907,0,0,1,24,16Zm-3,0a4.952,4.952,0,0,0-1.541-3.59L19,11.968V6.037a3,3,0,1,0-6,0v5.931l-.459.442A4.952,4.952,0,0,0,11,16a5,5,0,0,0,10,0ZM8,0H5V3.911L1.607,1.966.115,4.568,3.484,6.5.115,8.432l1.492,2.6L5,9.089V13H6.473A9.942,9.942,0,0,1,8,10.055Z"/></svg>

);
