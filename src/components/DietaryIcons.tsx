import { Leaf } from 'lucide-react';

export default function DietaryIcons({ dietary }: { dietary: string[] }) {
  if (dietary.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mt-3">
      {dietary.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border text-success-400 bg-success-500/10 border-success-500/20"
        >
          <Leaf className="w-3 h-3" />
          {tag}
        </span>
      ))}
    </div>
  );
}
