import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquarePhoneHangup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.196,10.961c.49.49.805,1.159.804,1.906l-.053,1.038c0,.605-.49,1.095-1.095,1.095l-1.56-.205c-.605,0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099,0l-.148,1.578c0,.605-.49,1.095-1.095,1.095l-1.56.205c-.605,0-1.095-.49-1.095-1.095l-.053-1.038c0-.747.314-1.416.804-1.906,2.711-2.711,9.874-2.517,12.391,0Zm5.804-5.461v13c0,3.032-2.468,5.5-5.5,5.5H5.5c-3.032,0-5.5-2.468-5.5-5.5V5.5C0,2.468,2.468,0,5.5,0h13c3.032,0,5.5,2.468,5.5,5.5Zm-3,0c0-1.379-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.121-2.5,2.5v13c0,1.379,1.121,2.5,2.5,2.5h13c1.379,0,2.5-1.121,2.5-2.5V5.5Z"/></svg>

);
