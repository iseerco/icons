import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleOverlap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.878,7.122C16.216,3.09,12.717,0,8.5,0,3.813,0,0,3.813,0,8.5c0,4.217,3.09,7.716,7.122,8.378.662,4.032,4.161,7.122,8.378,7.122,4.687,0,8.5-3.813,8.5-8.5,0-4.217-3.09-7.716-7.122-8.378Zm-14.878,1.378c0-3.584,2.916-6.5,6.5-6.5,3.079,0,5.66,2.155,6.327,5.034-4.15.328-7.465,3.643-7.793,7.793-2.879-.667-5.034-3.248-5.034-6.327Zm13.5,13.5c-3.079,0-5.66-2.155-6.327-5.034,4.15-.328,7.465-3.643,7.793-7.793,2.879.667,5.034,3.248,5.034,6.327,0,3.584-2.916,6.5-6.5,6.5Z"/>
</svg>

);
