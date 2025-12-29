import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiceD6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.333,.369c-.822-.494-1.844-.493-2.665,0L1,6.141v11.719l9.667,5.771c.411,.247,.872,.37,1.333,.37s.921-.123,1.332-.369l9.668-5.772V6.141L13.333,.369Zm-2.151,.857c.505-.303,1.132-.304,1.638,0l8.704,5.197-9.524,5.691L2.476,6.425,11.182,1.227ZM2,17.291V7.306l9.5,5.675v9.928c-.109-.037-.218-.076-.319-.137L2,17.291Zm10.819,5.482c-.101,.061-.21,.1-.319,.137V12.982l9.5-5.675v9.984l-9.181,5.482Z"/></svg>

);
