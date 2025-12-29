import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPeopleRoof = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.86,10.796L.011,8.434,9.836.746c1.273-.998,3.055-.999,4.328,0l9.825,7.688-1.85,2.362L12.314,3.108c-.186-.146-.443-.145-.629,0L1.86,10.796Zm-.36,3.204c0,1.657,1.343,3,3,3s3-1.343,3-3-1.343-3-3-3-3,1.343-3,3Zm18-3c-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3-1.343-3-3-3Zm-10.5,0c0,1.657,1.343,3,3,3s3-1.343,3-3-1.343-3-3-3-3,1.343-3,3Zm8,8c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v5h3v-5h4v5h3v-5Zm-12,0h-2c-1.654,0-3,1.346-3,3v2h3v-2h2v-3Zm16,0h-2v3h2v2h3v-2c0-1.654-1.346-3-3-3Z"/>
</svg>

);
