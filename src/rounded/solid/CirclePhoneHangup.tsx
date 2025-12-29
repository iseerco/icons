import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhoneHangup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6.947,12.905c0,.605-.49,1.095-1.095,1.095l-1.56-.205c-.605,0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099,0l-.148,1.578c0,.605-.49,1.095-1.095,1.095l-1.56,.205c-.605,0-1.095-.49-1.095-1.095l-.053-1.038c0-.747,.314-1.416,.804-1.906,2.711-2.711,9.874-2.517,12.391,0,.49,.49,.805,1.159,.804,1.906l-.053,1.038Z"/></svg>

);
