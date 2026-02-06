export function getLevelInfo(points, titles = []) {
  if (!titles || titles.length === 0) {
    // Fallback if titles aren't loaded yet
    return {
      title: "Loading...",
      nextTarget: 100,
      remaining: 0,
      percentage: 0,
      isMax: false,
    };
  }

  const currentLevel =
    titles.find((level) => points >= level.min && points < level.max) ||
    titles[titles.length - 1];

  const isMax = currentLevel.max == null || currentLevel.max === Infinity; // Handle potentially null/Infinity from DB
  const nextMax = isMax ? points : currentLevel.max;
  const remaining = Math.max(0, nextMax - points);

  // Calculate strict percentage for the bar
  const range = currentLevel.max - currentLevel.min;
  const progress = points - currentLevel.min;
  const percentage = isMax
    ? 100
    : Math.min(100, Math.max(0, (progress / range) * 100));

  return {
    title: currentLevel.title,
    nextTarget: nextMax,
    remaining,
    percentage,
    isMax,
    // Pass image url if available
    image: currentLevel.image,
  };
}
