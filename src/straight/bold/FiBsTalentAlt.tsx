import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTalentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,14h-3v-2.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v2.5h-3v-2.5c0-.276-.225-.5-.5-.5h-5c-.276,0-.5.224-.5.5v2.5Zm3-7c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm.331,9h-.648l-.784,3h-2.899v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687,2.173,1.68.505-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3Zm-4.331.611v-.611h-2.883l-.784-3h-.648l-.784,3H.003v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687,2.173,1.68.504-.349-.884-2.686,2.197-1.273Zm15.996-.611h-2.883l-.784-3h-.648l-.784,3h-2.899v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687,2.173,1.68.505-.349-.884-2.686,2.197-1.273v-.611Z"/>
</svg>

);
