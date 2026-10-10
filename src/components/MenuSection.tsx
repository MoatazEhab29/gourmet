import { useMemo, useState } from 'react';
import { Flame } from 'lucide-react';
import { menuItems, categories, type MenuCategory } from '@/data/menu';
import DietaryIcons from './DietaryIcons';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const handleCategoryChange = (cat: MenuCategory | 'All') => {
    setActiveCategory(cat);
    setVisibleCount(8);
  };

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-charcoal-900">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-50">
            Crafted with <span className="italic text-gold-400">Passion</span>
          </h2>
          <p className="mt-4 text-charcoal-400 max-w-xl mx-auto leading-relaxed">
            Every dish is prepared with the finest seasonal ingredients and an
            uncompromising attention to detail.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['All', ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-charcoal-900 shadow-lg shadow-gold-500/20'
                  : 'bg-charcoal-800 text-charcoal-300 hover:bg-charcoal-700 hover:text-gold-400 border border-charcoal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-charcoal-800 rounded-2xl overflow-hidden border border-charcoal-700/60 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1"
              style={{
    animation: `fadeUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                {item.popular && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 bg-gold-500 text-charcoal-900 text-xs font-bold rounded-full shadow-lg">
                    <Flame className="w-3 h-3" />
                    Popular
                  </span>
                )}
                <span className="absolute bottom-3 left-3 text-gold-300 text-xs font-medium tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-medium text-charcoal-50 leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-gold-400 font-semibold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">
                  {item.description}
                </p>
                <DietaryIcons dietary={item.dietary} />
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + 8)}
              className="px-8 py-3 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-charcoal-900 font-medium rounded-full transition-all duration-300"
            >
              View More Dishes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
