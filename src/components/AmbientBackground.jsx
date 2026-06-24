/**
 * Reusable ambient background used by every page so the
 * purple/fuchsia ambient lighting stays consistent site-wide.
 */
function AmbientBackground({ tone = 'dark', intensity = 'normal' }) {
  const isLight = tone === 'light';
  const opacity = intensity === 'strong' ? '' : 'opacity-40';
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-purple-600/8 via-transparent to-transparent rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-fuchsia-600/5 via-transparent to-transparent rounded-full blur-[120px]" />
      <div
        className={`absolute inset-0 ${
          isLight ? 'grid-overlay-light' : 'grid-overlay'
        } ${opacity}`}
      />
    </div>
  );
}

export default AmbientBackground;
