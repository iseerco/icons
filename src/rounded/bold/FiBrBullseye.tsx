import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBullseye = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12c.603-15.898,23.399-15.893,24,0,0,6.617-5.383,12-12,12Zm0-21C7.038,3,3,7.038,3,12c.453,11.923,17.549,11.92,18,0,0-4.962-4.038-9-9-9Zm0,16c-9.251-.294-9.249-13.707,0-14,9.251,.294,9.249,13.707,0,14Zm0-11c-5.274,.139-5.273,7.862,0,8,5.274-.139,5.273-7.862,0-8Zm0,6c-2.628-.047-2.628-3.954,0-4,2.628,.047,2.628,3.954,0,4Z"/></svg>

);
