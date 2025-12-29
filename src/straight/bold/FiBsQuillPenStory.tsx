import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsQuillPenStory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.498,2.671c-3.197,2.27-4.585,5.494-5.148,7.331-.513.909-.889,1.905-1.124,2.998h-2.226v2.484l-2.437.975c-1.617.647-2.518,2.41-2.095,4.099l.86,3.442h13.342l.86-3.442c.423-1.689-.478-3.452-2.096-4.099l-2.436-.975v-2.484h-1.744c1.59-4.897,5.974-8.919,9.513-9.333-3.154,2.231-5.32,5.233-6.689,7.629,1.939-.285,4.286-.95,6.422-2.467C23.208,5.488,24,.07,24,.07c0,0-5.796-.74-10.502,2.601Zm-1.176,16.573c.231.093.36.344.3.586l-.292,1.17H3.671l-.292-1.17c-.061-.241.068-.493.299-.585l4.322-1.729,4.321,1.729Z"/>
</svg>

);
