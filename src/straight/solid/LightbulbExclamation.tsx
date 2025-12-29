import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightbulbExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.868,15.583c.77.716,1.345,1.539,1.703,2.417h8.839c.328-.875.845-1.644,1.521-2.237,1.95-1.708,3.068-4.173,3.068-6.763,0-2.56-1.096-5.007-3.006-6.714C16.086.581,13.522-.231,10.956.059,6.904.517,3.59,3.782,3.075,7.822c-.374,2.931.644,5.76,2.793,7.761Zm5.132-11.583h2v7h-2v-7Zm0,9h2v2h-2v-2Zm5.007,7c-.005.104-.007.209-.007.315v3.685h-8v-3.851c0-.05,0-.1-.002-.149h8.009Z"/></svg>

);
