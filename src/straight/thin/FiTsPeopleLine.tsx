import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPeopleLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,8c2.206,0,4-1.794,4-4S20.206,0,18,0s-4,1.794-4,4,1.794,4,4,4Zm0-7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3ZM8,11c0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4-4,1.794-4,4Zm4-3c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-6,0c2.206,0,4-1.794,4-4S8.206,0,6,0,2,1.794,2,4s1.794,4,4,4Zm0-7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm12,19c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v3H0v1H24v-1h-6v-3Zm-11,0c0-1.103,.897-2,2-2h6c1.103,0,2,.897,2,2v3H7v-3Zm17-7v4h-1v-4c0-1.103-.897-2-2-2h-3c0-.341-.035-.674-.09-1h3.09c1.654,0,3,1.346,3,3ZM1,17H0v-4c0-1.654,1.346-3,3-3h3.09c-.055,.326-.09,.659-.09,1H3c-1.103,0-2,.897-2,2v4Z"/>
</svg>

);
