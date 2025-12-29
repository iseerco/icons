import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPersonDressSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,5c1.379,0,2.5-1.122,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5,.673-1.5,1.5-1.5Zm5.466,19l-2.175-11.948c-.217-1.189-1.251-2.052-2.46-2.052h-1.661c-1.209,0-2.243,.864-2.46,2.054l-2.165,11.946h2.955v4h1v-4h3v4h1v-4h2.966Zm-7.771-11.768c.13-.714,.75-1.232,1.476-1.232h1.661c.726,0,1.346,.518,1.476,1.231l1.96,10.769H8.242l1.952-10.768Z"/></svg>

);
