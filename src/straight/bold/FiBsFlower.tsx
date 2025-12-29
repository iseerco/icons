import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,15a3,3,0,0,1,0-6A3,3,0,0,1,12,15Zm0-3v0Zm0,12a5.008,5.008,0,0,1-4.734-3.39A5.322,5.322,0,0,1,2.194,12,5.322,5.322,0,0,1,7.266,3.39a5.017,5.017,0,0,1,9.468,0A5.322,5.322,0,0,1,21.806,12a5.322,5.322,0,0,1-5.072,8.61A5.008,5.008,0,0,1,12,24Zm-2-8.312V19a2,2,0,0,0,4,0V15.8l2.581,1.589a2.314,2.314,0,1,0,2.2-4.07L16.362,12l2.421-1.317a2.314,2.314,0,1,0-2.2-4.07L14,8.2V5a2,2,0,0,0-4,0V8.312L7.4,6.6a2.314,2.314,0,1,0-2.181,4.081L7.638,12,5.217,13.317A2.314,2.314,0,1,0,7.4,17.4Z"/></svg>

);
