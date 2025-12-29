import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AddImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.586,16h-2.586v6H0v-4.04l7.694-7.694c.319-.318.838-.318,1.157,0l5.734,5.734Zm1.414-9c.551,0,1-.448,1-1s-.449-1-1-1-1,.448-1,1,.449,1,1,1Zm8,11h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2ZM6.28,8.852L0,15.132V3C0,1.346,1.346,0,3,0h16c1.654,0,3,1.346,3,3v9h-6v2.586l-5.734-5.735c-1.1-1.1-2.887-1.098-3.985,0Zm6.72-2.852c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Z"/>
</svg>

);
