import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,7c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm11,5C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12h12v-12Zm-1,0v11h-11c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11Zm-10-.5c0-.827-.673-1.5-1.5-1.5h-2.5v1h2.5c.275,0,.5.225.5.5v7.5h1v-7.5Z"/></svg>

);
