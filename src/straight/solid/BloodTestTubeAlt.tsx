import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BloodTestTubeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.348,14.723l-7.812,7.812c-.944.944-2.199,1.464-3.535,1.464s-2.591-.52-3.535-1.464c-1.949-1.95-1.949-5.122,0-7.071l7.812-7.812,7.071,7.071ZM14.761.039l-1.414,1.414,1.064,1.064-3.72,3.72,7.071,7.071,3.721-3.721,1.064,1.064,1.414-1.414L14.761.039Zm8.067,22.789c.756-.755,1.172-1.76,1.172-2.828s-.416-2.073-1.18-2.836l-2.82-2.759-2.828,2.767c-.756.755-1.172,1.76-1.172,2.828s.416,2.073,1.172,2.828c.756.756,1.76,1.172,2.828,1.172s2.072-.416,2.828-1.172Z"/>
</svg>

);
