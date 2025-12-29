import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,6c0-.552,.447-1,1-1H17c.553,0,1,.448,1,1s-.447,1-1,1H1c-.553,0-1-.448-1-1Zm1,6H17c.553,0,1-.448,1-1s-.447-1-1-1H1c-.553,0-1,.448-1,1s.447,1,1,1Zm16,3H1c-.553,0-1,.447-1,1s.447,1,1,1H17c.553,0,1-.447,1-1s-.447-1-1-1Zm-2,5H1c-.553,0-1,.447-1,1s.447,1,1,1H15c.553,0,1-.447,1-1s-.447-1-1-1Zm7-1.816V5c0-2.757-2.243-5-5-5H1C.447,0,0,.448,0,1s.447,1,1,1H17c1.654,0,3,1.346,3,3v13.184c-1.161,.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816Z"/></svg>

);
