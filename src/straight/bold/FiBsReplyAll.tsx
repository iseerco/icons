import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReplyAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5v12.5h-3V11.5c0-.275-.224-.5-.5-.5H11.539l5.509,5.927-2.197,2.043-7.126-7.669c-.976-.976-.976-2.626,.038-3.64L14.817,.062l2.198,2.041-5.476,5.896h8.961c1.93,0,3.5,1.57,3.5,3.5ZM10.016,2.104L7.817,.062,.762,7.661c-1.013,1.014-1.013,2.664-.038,3.64l7.126,7.669,2.197-2.043L3.146,9.501,10.016,2.104Z"/></svg>

);
