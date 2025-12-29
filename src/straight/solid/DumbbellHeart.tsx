import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M5.077,3.95C5.077,1.824,6.644,.1,8.577,.1s3.5,1.724,3.5,3.85C12.077,1.824,13.644,.1,15.577,.1s3.5,1.724,3.5,3.85c0,4.032-7,8.75-7,8.75,0,0-7-4.718-7-8.75Zm18.923,13.05h-1v-3h-2v8h2v-3h1v-2Zm-6,0H6v-5h-2v12h2v-5h12v5h2V12h-2v5Zm-17,0H0v2H1v3H3V14H1v3Z"/>
</svg>

);
