import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.146,6.646c-.195,.195-.195,.512,0,.707s.512,.195,.707,0L10.939,2.268c.163-.163,.356-.269,.561-.341V23.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V1.927c.204,.072,.398,.178,.561,.341l5.086,5.086c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707L13.768,1.561c-.255-.254-.552-.439-.868-.561h5.601c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H5.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h5.599c-.316,.122-.612,.306-.866,.561L5.146,6.646Z"/></svg>

);
