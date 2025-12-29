import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShirtRunning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.691,21.491c-.427-.736-.691-1.58-.691-2.491v-8.026c0-1.023.518-1.981,1.35-2.502,1.034-.645,1.65-1.756,1.65-2.972V1c0-.552.447-1,1-1s1,.448,1,1v3c0,2.206,1.794,4,4,4s4-1.794,4-4V1c0-.552.447-1,1-1s1,.448,1,1v4.5c0,1.216.616,2.327,1.649,2.972.365.228.655.55.882.915L3.691,21.491Zm1.334,1.504c.834.623,1.857,1.005,2.975,1.005h8c2.757,0,5-2.243,5-5v-7.487l-15.975,11.482Z"/>
</svg>

);
