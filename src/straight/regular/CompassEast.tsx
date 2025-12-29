import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassEast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-1.996-15.945l-.023-.013c-.609-.342-1.338-.344-1.948-.007-.965,.533-1.316,1.752-.826,2.63l1.44,3.339-1.408,3.316c-.304,.592-.292,1.312,.036,1.896,.365,.647,1.039,1.013,1.741,1.013,.34,0,.686-.085,1.007-.266l9.921-5.965L10.004,6.055Zm-.986,10.181l1.805-4.239-1.825-4.211h.001s7.056,4.217,7.056,4.217l-7.038,4.233Z"/>
</svg>

);
