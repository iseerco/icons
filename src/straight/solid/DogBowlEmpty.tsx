import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DogBowlEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.265,6.507c-.242-1.453-1.486-2.507-2.959-2.507H4.694c-1.473,0-2.717,1.054-2.959,2.507L.014,16.836l-.014,3.164H24v-3l-1.735-10.493Zm-5.265,6.743c0,.966-.784,1.75-1.75,1.75s-1.75-.784-1.75-1.75c0-.086,.013-.168,.025-.25h-3.05c.012,.082,.025,.164,.025,.25,0,.966-.784,1.75-1.75,1.75s-1.75-.784-1.75-1.75c0-.49,.203-.932,.528-1.25-.325-.318-.528-.76-.528-1.25,0-.966,.784-1.75,1.75-1.75s1.75,.784,1.75,1.75c0,.086-.013,.168-.025,.25h3.05c-.012-.082-.025-.164-.025-.25,0-.966,.784-1.75,1.75-1.75s1.75,.784,1.75,1.75c0,.49-.203,.932-.528,1.25,.325,.318,.528,.76,.528,1.25Z"/>
</svg>

);
