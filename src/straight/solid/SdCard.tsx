import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0h-7.758c-1.054,0-2.084.427-2.828,1.172l-3.242,3.242c-.756.756-1.172,1.761-1.172,2.829v16.757h18V3c0-1.654-1.346-3-3-3Zm-8,7h-2v-3c.391-.391.609-.609,1-1h1v4Zm4,0h-2V3h2v4Zm4,0h-2V3h2v4Z"/>
</svg>

);
