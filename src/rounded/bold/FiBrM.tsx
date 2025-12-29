import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,24c-.828,0-1.5-.672-1.5-1.5V3.874c0-.617-.465-.793-.665-.84-.198-.048-.693-.098-.97,.454l-6.011,12.656c-.489,1.125-2.22,1.124-2.709,0L4.622,3.46c-.262-.524-.757-.472-.957-.427-.2,.047-.665,.223-.665,.84V22.5c-.034,1.972-2.967,1.971-3,0V3.874C0,2.045,1.196,.534,2.976,.114c1.778-.417,3.525,.396,4.343,2.032l4.682,9.857L16.669,2.173c.831-1.664,2.58-2.479,4.355-2.06,1.78,.42,2.976,1.931,2.976,3.76V22.5c0,.828-.672,1.5-1.5,1.5Z"/></svg>

);
