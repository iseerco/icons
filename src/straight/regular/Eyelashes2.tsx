import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eyelashes2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.909 10.935c-.205.448-.697 1.372-1.546 2.226l1.217 1.971-1.701 1.051-1.132-1.833c-.512.262-1.093.461-1.747.565v2.086h-2v-2.086c-.654-.104-1.235-.303-1.747-.565l-1.132 1.833-1.701-1.051 1.217-1.971c-.849-.854-1.341-1.778-1.546-2.226l1.818-.832c.311.68 1.525 2.897 4.091 2.897s3.78-2.217 4.091-2.897zm12 0-1.818-.832c-.311.68-1.525 2.897-4.091 2.897s-3.78-2.217-4.091-2.897l-1.818.832c.205.448.697 1.372 1.546 2.226l-1.217 1.971 1.701 1.051 1.132-1.833c.512.262 1.093.461 1.747.565v2.086h2v-2.086c.654-.104 1.235-.303 1.747-.565l1.132 1.833 1.701-1.051-1.217-1.971c.849-.854 1.341-1.778 1.546-2.226z"/></svg>
);
