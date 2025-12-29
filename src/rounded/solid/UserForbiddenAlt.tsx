import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserForbiddenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm4,6c0,.74-.216,1.424-.567,2.019l-5.452-5.453c.595-.351,1.279-.567,2.019-.567,2.206,0,4,1.794,4,4Zm-8,0c0-.74,.216-1.424,.567-2.019l5.452,5.453c-.595,.351-1.279,.567-2.019,.567-2.206,0-4-1.794-4-4Zm-5-6c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm3.721,12H1c-.553,0-1-.448-1-1,0-4.962,4.037-9,9-9,.67,0,1.321,.079,1.95,.219-.605,1.126-.95,2.413-.95,3.781,0,2.393,1.056,4.534,2.721,6Z"/>
</svg>

);
