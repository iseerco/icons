import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_08_text_check" data-name="08 text check"><path d="M14.236,14.236,7.118,0,0,14.236H2.236l2-4H10l2,4Zm-9-6L7.118,4.472,9,8.236Z"/><polygon points="12.997 24 7.29 18.293 8.704 16.879 12.997 21.172 22.586 11.583 24 12.997 12.997 24"/></g></svg>

);
