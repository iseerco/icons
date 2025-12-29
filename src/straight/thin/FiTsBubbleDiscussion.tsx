import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBubbleDiscussion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,16v8h-8c-2.955,0-5.535-1.615-6.92-4.004,.382-.003,.759-.025,1.131-.066,1.261,1.851,3.385,3.07,5.789,3.07h7v-7c0-2.404-1.219-4.528-3.07-5.789,.041-.372,.064-.749,.066-1.131,2.389,1.385,4.004,3.965,4.004,6.92Zm-15,2H0V9C0,4.037,4.038,0,9,0s9,4.037,9,9-4.038,9-9,9Zm8-9c0-4.411-3.589-8-8-8S1,4.589,1,9v8H9c4.411,0,8-3.589,8-8Zm-8-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/>
</svg>

);
