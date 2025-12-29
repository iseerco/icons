import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleTrash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm4.5-14h-1.5c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2h-1.5c-.828,0-1.5.671-1.5,1.5,0,.653.418,1.208,1,1.414v5.586c0,1.93,1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5v-5.586c.582-.206,1-.761,1-1.414,0-.829-.672-1.5-1.5-1.5Zm-2.5,8.5c0,.276-.225.5-.5.5h-3c-.275,0-.5-.224-.5-.5v-5.5h4v5.5Z"/>
</svg>

);
