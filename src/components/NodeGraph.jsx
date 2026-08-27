import { useMemo } from 'react'

// A quiet, ambient callback to the real GraphQL schema visualizer Cliff
// built at GraphQL Discovery: a node/edge graph, gently animated.
// Deterministic pseudo-random layout so it's stable across renders.

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export default function NodeGraph({ nodeCount = 18, seed = 7 }) {
  const { nodes, edges } = useMemo(() => {
    const rand = seededRandom(seed)
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      r: 2 + rand() * 2.6,
      accent: rand() > 0.62,
      delay: rand() * 6,
      dur: 5 + rand() * 5,
    }))

    // connect each node to its nearest 1-2 neighbors for a organic graph feel
    const edges = []
    nodes.forEach((n, i) => {
      const distances = nodes
        .map((m, j) => ({
          j,
          d: j === i ? Infinity : Math.hypot(n.x - m.x, n.y - m.y),
        }))
        .sort((a, b) => a.d - b.d)
      const linkCount = 1 + Math.floor(rand() * 2)
      for (let k = 0; k < linkCount; k++) {
        const target = distances[k]
        if (target && target.d < 45) {
          const key = [i, target.j].sort().join('-')
          if (!edges.find((e) => e.key === key)) {
            edges.push({ key, a: n, b: nodes[target.j], delay: rand() * 4 })
          }
        }
      }
    })

    return { nodes, edges }
  }, [nodeCount, seed])

  return (
    <svg
      className="node-graph"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g>
        {edges.map((e) => (
          <line
            key={e.key}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            className="ng-edge"
            style={{ animationDelay: `${e.delay}s` }}
          />
        ))}
        {nodes.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r * 0.18}
            className={n.accent ? 'ng-node ng-node-accent' : 'ng-node'}
            style={{ animationDelay: `${n.delay}s`, animationDuration: `${n.dur}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
