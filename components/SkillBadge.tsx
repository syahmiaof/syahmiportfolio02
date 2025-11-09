
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <div className="bg-slate-700 text-slate-200 px-4 py-2 rounded-md font-medium text-sm shadow-md">
      {name}
    </div>
  );
};

export default SkillBadge;
