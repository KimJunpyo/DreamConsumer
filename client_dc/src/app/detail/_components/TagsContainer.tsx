'use client';

import { Tag } from '@/components';
import { tagsSmallColor } from '../group/[itemId]/_util/functions';

interface TagsContainerProps {
  tags: string[];
}

export default function TagsContainer({ tags }: TagsContainerProps) {
  return (
    <div className='w-full flex flex-row items-center justify-center'>
      <div className='w-10/12 flex flex-wrap'>
        {tags.map((el, idx) => {
          const tagsColor = tagsSmallColor(idx);
          return (
            <Tag items={tagsColor} key={idx}>
              {el}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
