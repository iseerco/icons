import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceRaisedEyebrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-5-7h10v2H7v-2Zm10-4.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm-8.5-1.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1.5-1H6v-2h4v2Zm8.205-1.679l-1.646,1.135c-.025-.031-.367-.456-1.058-.456-1,0-1.661,1.364-1.668,1.378l-1.821-.827c.047-.104,1.177-2.551,3.489-2.551,1.744,0,2.612,1.187,2.705,1.321Z"/></svg>

);
