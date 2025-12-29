import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWednesday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v9.68c-.667-.425-1.452-.68-2.3-.68h-.7v-4H3v11h2.358l.154,2.122c.019.311.076.605.167.878H0V5c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3Zm0,13.3v3.4c0,1.269-1.031,2.3-2.3,2.3h-2.3v-8h2.3c1.269,0,2.3,1.031,2.3,2.3Zm-1.6,0c0-.386-.314-.7-.7-.7s-.7,0-.7,0v4.802s.314,0,.7,0,.7-.314.7-.7v-3.4Zm-7.4,5.7h3.5v-1.6h-1.9v-1.551h1.9v-1.6h-1.9v-1.65h1.9v-1.6h-3.5v8Zm-2.923-3.598l-.12-.264-1.457-3.204-1.457,3.204-.12.264-.319-4.402h-1.604l.508,7c.043.705.472,1,.988,1,.342,0,.66-.242.841-.64l1.164-2.56,1.164,2.56c.181.398.499.64.841.64.516,0,.945-.295.988-1l.508-7h-1.604l-.319,4.402Z"/>
</svg>

);
