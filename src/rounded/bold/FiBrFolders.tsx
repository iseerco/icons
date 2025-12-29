import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFolders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,21.5c0,.828-.672,1.5-1.5,1.5H5.5c-3.033,0-5.5-2.468-5.5-5.5V8.5c.034-1.972,2.967-1.971,3,0v9c0,1.379,1.122,2.5,2.5,2.5h13.5c.828,0,1.5,.672,1.5,1.5Zm3.5-14v6c0,2.481-2.019,4.5-4.5,4.5H9.5c-2.481,0-4.5-2.019-4.5-4.5V5.5c0-2.481,2.019-4.5,4.5-4.5h2.056c.54,0,1.081,.128,1.564,.369l3.156,1.578c.068,.034,.146,.053,.224,.053h3c2.481,0,4.5,2.019,4.5,4.5Zm-3,6v-5.5H8v5.5c0,.827,.673,1.5,1.5,1.5h10c.827,0,1.5-.673,1.5-1.5Z"/></svg>

);
