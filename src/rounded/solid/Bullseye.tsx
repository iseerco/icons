import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bullseye = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12c.603-15.898,23.399-15.893,24,0,0,6.617-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12c.503,13.248,19.499,13.245,20,0,0-5.514-4.486-10-10-10Zm0,18c-4.411,0-8-3.589-8-8,.376-10.588,15.626-10.585,16,0,0,4.411-3.589,8-8,8Zm0-14c-7.929,.252-7.928,11.749,0,12,7.929-.252,7.927-11.749,0-12Zm0,10c-5.274-.139-5.273-7.862,0-8,5.274,.139,5.273,7.862,0,8Zm0-6c-2.628,.047-2.628,3.954,0,4,2.628-.047,2.628-3.954,0-4Z"/></svg>

);
