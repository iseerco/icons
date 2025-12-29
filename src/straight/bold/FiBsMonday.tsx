import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMonday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v9h-3v-4H3v11h.712l-.218,3H0V5c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3Zm-12.995,11c-.342,0-.66.242-.841.64l-1.164,2.56-1.164-2.56c-.181-.398-.499-.64-.841-.64-.516,0-.945.295-.988,1l-.508,7h1.604l.319-4.402.12.264,1.457,3.204,1.457-3.204.12-.264.319,4.402h1.604l-.508-7c-.043-.705-.472-1-.988-1Zm11.395,4.063l-1.8-4.054v-.009h-1.6v8h1.6v-4.054l1.8,4.054h1.6v-8h-1.6v4.063Zm-4.4-1.763v3.4c0,1.269-1.031,2.3-2.3,2.3s-2.3-1.031-2.3-2.3v-3.4c0-1.269,1.031-2.3,2.3-2.3s2.3,1.031,2.3,2.3Zm-1.6,0c0-.386-.314-.7-.7-.7s-.7.314-.7.7v3.4c0,.386.314.7.7.7s.7-.314.7-.7v-3.4Z"/>
</svg>

);
