import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAlignSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.707,10l4,4h8.793c.276,0,.5.224.5.5s-.224.5-.5.5h-7.793l4,4h3.793c.276,0,.5.224.5.5s-.224.5-.5.5h-2.793l3.146,3.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146L.146.854C-.049.658-.049.342.146.146S.658-.049.854.146l3.854,3.854h18.793c.276,0,.5.224.5.5s-.224.5-.5.5H5.707l4,4h13.793c.276,0,.5.224.5.5s-.224.5-.5.5h-12.793Zm4.793,9H.5c-.276,0-.5.224-.5.5s.224.5.5.5h15c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM.5,15h10c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Zm0-5h5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5Z"/></svg>

);
