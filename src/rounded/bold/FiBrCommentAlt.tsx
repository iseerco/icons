import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCommentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5A5.507,5.507,0,0,0,0,5.5v9A5.507,5.507,0,0,0,5.5,20H6.938l4.1,3.428a1.5,1.5,0,0,0,1.924,0L17.062,20H18.5A5.507,5.507,0,0,0,24,14.5v-9A5.507,5.507,0,0,0,18.5,0ZM21,14.5A2.5,2.5,0,0,1,18.5,17H16.517a1.5,1.5,0,0,0-.962.35L12,20.322,8.445,17.35A1.5,1.5,0,0,0,7.483,17H5.5A2.5,2.5,0,0,1,3,14.5v-9A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z"/><path d="M7.5,9h3a1.5,1.5,0,0,0,0-3h-3a1.5,1.5,0,0,0,0,3Z"/><path d="M16.5,11h-9a1.5,1.5,0,0,0,0,3h9a1.5,1.5,0,0,0,0-3Z"/></svg>

);
