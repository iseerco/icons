import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TransformationCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,24C3.813,24,0,20.187,0,15.5S3.813,7,8.5,7s8.5,3.813,8.5,8.5-3.813,8.5-8.5,8.5ZM15.5,0c-3.46,0-6.432,2.071-7.758,5.038.251-.018.502-.038.758-.038,2.536,0,4.864.904,6.681,2.405l2.362-2.362-2.043-2.043h4.583c.506,0,.917.41.917.917v4.583l-2.043-2.043-2.362,2.362c1.502,1.817,2.405,4.145,2.405,6.681,0,.256-.02.507-.038.758,2.967-1.326,5.038-4.298,5.038-7.758C24,3.806,20.194,0,15.5,0Z"/>
</svg>

);
