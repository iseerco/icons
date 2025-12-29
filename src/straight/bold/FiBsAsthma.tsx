import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAsthma = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.97 9.801-.252 1.199h-5.139l.374-1.805c.147-.678.747-1.162 1.44-1.162h2.133c.932 0 1.63.854 1.444 1.767zm-6.634 7.199h-2.336v5h5.204c.708 0 1.316-.47 1.448-1.165l1.646-7.835h-5.134l-.829 4zm-2.336-4.317s-.575-1.308-.798-1.821c-1.12-2.579-2.177-5.015-3.319-6.425-2.113-2.822-5.332-4.437-8.837-4.437h-.053c-.666 0-1.335.066-1.993.192v3.075c.654-.174 1.331-.269 2.008-.267h.037c2.551 0 4.895 1.178 6.47 3.279.964 1.175 2.142 3.953 3.127 6.221h-1.557l-.698 5.068c-.034.246-.247.432-.495.432h-3.893v3h-4.999v3h8v-3h.893c1.739 0 3.23-1.3 3.467-3.022l.342-2.478h2.298z"/></svg>
);
