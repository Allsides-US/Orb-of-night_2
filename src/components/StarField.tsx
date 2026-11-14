const STAR_COUNT = 28;

export function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {Array.from({ length: STAR_COUNT }, (_, index) => (
        <span key={index} className={`tiny-star tiny-star--${(index % 5) + 1}`} />
      ))}
    </div>
  );
}
