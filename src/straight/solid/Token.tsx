import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Token = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Zm0-16c-3.86,0-7,3.141-7,7s3.14,7,7,7,7-3.141,7-7-3.14-7-7-7Zm4.48,6.188l-2.467,1.428.994,3.013-.561.389-2.437-1.884-2.445,1.892h-.015l-.538-.404.972-3.051-2.482-1.383v-.688h3.252l.882-3.365h.725l.882,3.365h3.237v.688Z"/>
</svg>

);
