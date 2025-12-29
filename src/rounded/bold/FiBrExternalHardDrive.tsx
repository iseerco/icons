import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExternalHardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,10.268v-5.268c0-2.757-2.243-5-5-5h-6c-2.757,0-5,2.243-5,5h-1.5C2.467,5,0,7.468,0,10.5v9.5c0,2.209,1.791,4,4,4h9c2.209,0,4-1.791,4-4v-9.5c0-3.032-2.468-5.5-5.5-5.5h-1.5c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v5.268c-.598.346-1,.992-1,1.732v3c0,1.105.895,2,2,2h1c1.105,0,2-.895,2-2v-3c0-.74-.402-1.386-1-1.732Zm-14.5,12.232c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm4,0c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5.67,1.5,1.5-.67,1.5-1.5,1.5Zm-1-14.5c1.378,0,2.5,1.121,2.5,2.5v7.5H3v-7.5c0-1.379,1.122-2.5,2.5-2.5h6Z"/>
</svg>

);
