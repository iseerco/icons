import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserTrust = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm.752,8.44l-.004,.004c-.744,.744-2.058,.746-2.823-.019l-2.182-2.268,1.387-1.441,2.216,2.301,3.614-3.703,1.398,1.43-3.607,3.696ZM3,6C3,2.691,5.691,0,9,0s6,2.691,6,6-2.691,6-6,6S3,9.309,3,6ZM12.721,24H0v-5c0-2.761,2.239-5,5-5h6.079c-.682,1.178-1.079,2.541-1.079,4,0,2.393,1.056,4.534,2.721,6Z"/>
</svg>

);
