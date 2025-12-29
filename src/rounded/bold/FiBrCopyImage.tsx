import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCopyImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm14-1v5c0,3.03-2.47,5.5-5.5,5.5H10.5c-3.03,0-5.5-2.47-5.5-5.5V6.5c0-3.03,2.47-5.5,5.5-5.5h8c3.03,0,5.5,2.47,5.5,5.5ZM8,11.5c0,1,.59,1.86,1.43,2.26l4.28-4.28c.62-.62,1.64-.62,2.26,0l1.04,1.04c.62,.62,1.64,.62,2.26,0l1.72-1.72v-2.29c0-1.38-1.12-2.5-2.5-2.5H10.5c-1.38,0-2.5,1.12-2.5,2.5v5Zm8.5,7.5H5.5c-1.38,0-2.5-1.12-2.5-2.5v-7c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v7c0,3.03,2.47,5.5,5.5,5.5h11c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>

);
