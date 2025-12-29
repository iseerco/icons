import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,0H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h17V2c0-1.103-.897-2-2-2Zm0,22H5c-.551,0-1-.448-1-1s.449-1,1-1h15v2Zm0-4H5c-.352,0-.686.072-1,.184V3c0-.551.449-1,1-1h15v16Zm-8.572-3.847l.572.399.572-.399c.453-.316,4.428-3.17,4.428-5.935,0-1.774-1.346-3.218-3-3.218-.782,0-1.477.27-2,.727-.523-.457-1.218-.727-2-.727-1.654,0-3,1.444-3,3.218,0,2.765,3.975,5.619,4.428,5.935Zm-1.428-7.153c.483,0,1,.263,1,1h2c0-.737.517-1,1-1,.551,0,1,.546,1,1.218,0,1.085-1.604,2.77-3,3.868-1.396-1.099-3-2.783-3-3.868,0-.672.449-1.218,1-1.218Z"/>
</svg>

);
