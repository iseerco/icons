import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatterySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.784,16h1.216c.552,0,1-.448,1-1v-6c0-.552-.448-1-1-1h-1.101c-.465-2.279-2.485-4-4.899-4H5.414L1.707,.293C1.316-.098,.683-.098,.292,.293S-.098,1.316,.292,1.707L22.293,23.707c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414l-3.582-3.582c.78-.72,1.364-1.679,1.659-2.711Zm-6.026,4H5c-2.757,0-5-2.243-5-5v-6c0-1.317,.512-2.516,1.347-3.41l14.411,14.41Z"/></svg>

);
