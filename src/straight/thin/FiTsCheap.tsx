import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCheap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.824,19.357l-4.292,4.207c-.291.291-.673.436-1.056.436s-.769-.146-1.062-.439l-4.25-4.25.707-.707,4.129,4.129V0h1v22.685l4.124-4.042.7.714ZM1,10.5C1,5.262,5.262,1,10.5,1c2.05,0,3.946.66,5.5,1.768v-1.196c-1.602-.991-3.482-1.573-5.5-1.573C4.71,0,0,4.71,0,10.5s4.71,10.5,10.5,10.5h.5v-1h-.5c-5.238,0-9.5-4.262-9.5-9.5Zm3,0c0-3.584,2.916-6.5,6.5-6.5v-1c-4.136,0-7.5,3.364-7.5,7.5s3.364,7.5,7.5,7.5h.5v-1h-.5c-3.584,0-6.5-2.916-6.5-6.5Z"/>
</svg>

);
