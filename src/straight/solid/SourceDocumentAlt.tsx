import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SourceDocumentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,17c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm-10.5-8.414V2.086L7.914,0H2v10h6.586l4.457,4.457-1.543,1.543h3.5c.552,0,1-.448,1-1v-3.5l-1.543,1.543-4.457-4.457Zm3,9.414v2h-3v-3.914l-2.086-2.086H2v10h8v-2h3v2l2.699-2.324c.401-.361.401-.99,0-1.351l-2.699-2.324Zm7-5h-2l2.324,2.699c.361.401.99.401,1.351,0l2.324-2.699h-2V2.086l-2.086-2.086h-5.914v10h6v3Z"/>
</svg>

);
