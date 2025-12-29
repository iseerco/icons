import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.36,18.239l1.02-12.239h1.62v-3h-5v-.5c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v.5h-.879L2.123.002.002,2.123l21.875,21.875,2.121-2.121-3.638-3.638Zm-2.779-2.779L8.121,6h10.249l-.788,9.461Zm-1.531,5.539l2.462,2.462c-.541.341-1.178.538-1.853.538H7.34c-1.806,0-3.338-1.41-3.488-3.209l-1.09-13.079,3.284,3.284.795,9.545c.022.262.236.459.499.459h8.71Z"/>
</svg>

);
