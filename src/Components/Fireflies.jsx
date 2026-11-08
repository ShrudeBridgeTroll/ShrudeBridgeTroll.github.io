// Positions, sizes, and delays are fixed to prevent random jumps on re-render.
const fireflies = [
  [8, 35, 3.1, 0.2, 7], [18, 66, 4.1, -1.2, 9], [27, 26, 3.7, -2.1, 6],
  [37, 76, 5.4, -0.6, 8], [46, 43, 4.5, -3.1, 7], [55, 69, 3.2, -0.9, 10],
  [64, 24, 5.7, -2.6, 6], [73, 56, 4.8, -1.7, 8], [83, 36, 3.5, -0.3, 9],
  [92, 72, 5.3, -3.8, 7], [12, 86, 4.2, -1.4, 8], [88, 86, 3.9, -2.4, 10],
];

export default function Fireflies({ theme }) {
  return (
    <div className={`fireflies fireflies-${theme}`} aria-hidden="true">
      {fireflies.map(([x, y, duration, delay, size], index) => (
        <span
          key={index}
          className="firefly"
          style={{
            '--x': `${x}%`,
            '--y': `${y}%`,
            '--duration': `${duration}s`,
            '--delay': `${delay}s`,
            '--size': `${size}px`,
          }}
        />
      ))}
    </div>
  );
}
