import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cryptocurrency = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-2.829,14.829c1.56,1.56,4.098,1.56,5.657,0l1.414,1.414c-.914.915-2.055,1.46-3.243,1.659v2.098h-2v-2.098c-1.188-.199-2.328-.744-3.243-1.659-2.339-2.339-2.339-6.146,0-8.485.914-.915,2.055-1.46,3.243-1.659v-2.098h2v2.098c1.188.199,2.328.744,3.243,1.659l-1.414,1.414c-1.56-1.56-4.098-1.56-5.657,0-.755.755-1.171,1.76-1.171,2.829s.416,2.073,1.171,2.829Z"/>
</svg>

);
