import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SwipeRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.494,5.291l-2.762,2.762-1.414-1.414,1.638-1.639h-7.956v-2h7.892l-1.574-1.574L20.732.012l2.761,2.762c.693.693.694,1.822,0,2.518Zm-13.494-3.184c0-.996-.681-1.92-1.664-2.08-1.253-.204-2.336.758-2.336,1.973v14.899l-2.252-2.292c-.097-.097-.265-.222-.487-.367-.931-.519-2.157-.313-2.853.619-.667.894-.482,2.169.305,2.958l6.037,6.182h15.25v-10.808l-12-3.192V2.107Z"/>
</svg>

);
