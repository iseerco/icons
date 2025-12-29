import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPeopleLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.5,10.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5-1.567,3.5-3.5,3.5-3.5-1.567-3.5-3.5Zm9.5-3.5c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm-12,0c1.933,0,3.5-1.567,3.5-3.5S7.933,0,6,0,2.5,1.567,2.5,3.5s1.567,3.5,3.5,3.5Zm14.5,1h-3.607c.385,.751,.607,1.599,.607,2.5,0,.169-.01,.335-.025,.5h3.025c.275,0,.5,.225,.5,.5v3.5h3v-3.5c0-1.93-1.57-3.5-3.5-3.5Zm-2.5,13h6v3H0v-3H6v-2.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v2.5Zm-9,0h6v-2.5c0-.275-.225-.5-.5-.5h-5c-.275,0-.5,.225-.5,.5v2.5ZM3,11.5c0-.275,.225-.5,.5-.5h3.025c-.015-.165-.025-.331-.025-.5,0-.901,.222-1.749,.607-2.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v3.5H3v-3.5Z"/>
</svg>

);
