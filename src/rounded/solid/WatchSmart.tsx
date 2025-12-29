import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchSmart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.987,22c1.074,0,2.089-.251,3-.685v1.685c0,.553-.447,1-1,1H6.987c-.553,0-1-.447-1-1v-1.685c.911.435,1.926.685,3,.685h6Zm5-13v6c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h6c2.757,0,5,2.243,5,5Zm-5.28,4.293l-1.707-1.707v-3.586c0-.553-.447-1-1-1s-1,.447-1,1v4c0,.266.105.52.293.707l2,2c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm.28-11.293c1.074,0,2.089.251,3,.685v-1.685c0-.553-.447-1-1-1H6.987c-.553,0-1,.447-1,1v1.685c.911-.435,1.926-.685,3-.685h6Z"/></svg>

);
