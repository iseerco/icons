import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8c0,.553-.447,1-1,1H10c-.552,0-1-.447-1-1s.448-1,1-1h13c.553,0,1,.447,1,1Zm-4,4H10c-.552,0-1,.447-1,1s.448,1,1,1h10c.553,0,1-.447,1-1s-.447-1-1-1Zm-3,5h-7c-.552,0-1,.447-1,1s.448,1,1,1h7c.553,0,1-.447,1-1s-.447-1-1-1Zm-3,5h-4c-.552,0-1,.447-1,1s.448,1,1,1h4c.553,0,1-.447,1-1s-.447-1-1-1ZM9.122,3.293L6.414,.586C5.635-.193,4.365-.193,3.586,.586L.879,3.293c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0l1.707-1.707V23c0,.553,.448,1,1,1s1-.447,1-1V3l1.708,1.707c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Z"/></svg>

);
