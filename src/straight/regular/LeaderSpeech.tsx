import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LeaderSpeech = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <circle cx="14.5" cy="2.5" r="2.5"/>
  <path d="m24,16h-5V7.362l4.768-5.722-1.536-1.28-4.7,5.64h-6.063L6.768.36l-1.536,1.28,4.768,5.722v8.638h-6v-3.086l.989-.989c.164.044.333.074.511.074,1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2c0,.178.031.348.074.512l-1.574,1.574v3.914H0v2h2v6h2v-6h16v6h2v-6h2v-2Zm-12-8h5v8h-5v-8Z"/>
</svg>

);
