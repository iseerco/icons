import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsResume = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16.428,0H5.547c-1.93,0-3.5,1.57-3.5,3.5V24H21.996l.053-18.334L16.428,0ZM5.047,21V3.5c0-.275,.225-.5,.5-.5H14.047v5h4.995l-.038,13H5.047Zm1.953-5h10v3H7v-3Zm1.5-8c0-1.105,.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Zm5.5,6H7v-1c0-1.105,.895-2,2-2h3c1.105,0,2,.895,2,2v1Z"/>
</svg>

);
