import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandMineOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,23c0,.553-.447,1-1,1H1c-.553,0-1-.447-1-1s.447-1,1-1h.775l.306-2.137c.317-2.217,2.215-3.863,4.455-3.863h10.929c2.239,0,4.138,1.646,4.455,3.863l.306,2.137h.775c.553,0,1,.447,1,1ZM7,14h10v-1c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v1Zm5-6c.553,0,1-.448,1-1V1c0-.552-.447-1-1-1s-1,.448-1,1V7c0,.552,.447,1,1,1Zm6,1c.256,0,.512-.098,.707-.293l4-4c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0l-4,4c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293Zm-12.707-.293c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414L2.707,3.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l4,4Z"/>
</svg>

);
