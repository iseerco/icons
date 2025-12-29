import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Completed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2H3v19c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-8.441,6.705l1.28,1.213,2.548-2.547,1.414,1.414-2.692,2.692c-.351.352-.808.528-1.265.528-.44,0-.882-.164-1.23-.494l-1.43-1.354,1.375-1.452Zm1.285,9.3c-.44,0-.882-.164-1.23-.494l-1.43-1.354,1.375-1.452,1.28,1.213,2.548-2.547,1.414,1.414-2.692,2.692c-.351.352-.808.528-1.265.528Zm8.327-.005h-5l2.042-2h2.958v2Zm0-6h-5l2.042-2h2.958v2Z"/>
</svg>

);
