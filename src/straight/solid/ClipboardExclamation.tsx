import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,8c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm1,9h-2v-2h2v2Zm0-3h-2v-5h2v5Zm2.829-12c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2H3v19c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-3.829,18c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Z"/>
</svg>

);
