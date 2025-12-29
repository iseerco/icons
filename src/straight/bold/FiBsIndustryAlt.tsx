import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIndustryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,8.585V3.793l-8,5V3h1V0H0v3h1v17.5c0,1.93,1.57,3.5,3.5,3.5h16c1.93,0,3.5-1.57,3.5-3.5V3.585l-7,5Zm4,11.915c0,.276-.225.5-.5.5H4.5c-.275,0-.5-.224-.5-.5V3h2v16h3v-6.669l5-3.125v5.208l7-5v11.085Zm-10-4.5h3v3h-3v-3Zm8,3h-3v-3h3v3Z"/>
</svg>

);
