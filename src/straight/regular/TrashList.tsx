import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5.335,21.11l-1.679-15.11h14.65l-.222,2h2.013l.222-2h1.682v-2h-6v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H0v2h1.643l1.704,15.331c.169,1.521,1.45,2.669,2.981,2.669h7.672v-2h-7.672c-.51,0-.938-.383-.993-.89ZM8,2h6v2h-6v-2Zm16,8v2h-8v-2h8Zm-8,5h6v2h-6v-2Zm0,5h4v2h-4v-2Z"/>
</svg>

);
