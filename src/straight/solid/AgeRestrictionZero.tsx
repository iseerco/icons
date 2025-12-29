import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AgeRestrictionZero = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,10.5v3c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-3c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5Zm14,1.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-12-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-3Zm7,.5h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2Z"/>
</svg>

);
