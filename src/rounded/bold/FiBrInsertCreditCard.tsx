import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrInsertCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.927,3.682c-.385-2.169-2.386-3.682-4.589-3.682H4.5C2.015,0,0,2.015,0,4.5c0,1.953,1.258,3.602,3,4.224v9.776c0,3.038,2.462,5.5,5.5,5.5h7c3.038,0,5.5-2.462,5.5-5.5V8.724c1.981-.706,3.336-2.742,2.927-5.041ZM8,20.949c-1.14-.232-2-1.242-2-2.449V3h2V20.949Zm10-2.449c0,1.378-1.121,2.5-2.5,2.5h-4.5V3h7v15.5Zm-5-1c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/>
</svg>

);
