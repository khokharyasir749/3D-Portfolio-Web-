import React, { useEffect, useRef, useCallback } from 'react';

interface TechItemConfig {
  id: string;
  name: string;
  radius: number;
}

const TECH_CONFIG: TechItemConfig[] = [
  { id: 'react', name: 'React', radius: 54 },
  { id: 'javascript', name: 'JavaScript', radius: 52 },
  { id: 'html5', name: 'HTML5', radius: 46 },
  { id: 'css3', name: 'CSS3', radius: 46 },
  { id: 'tailwind', name: 'Tailwind CSS', radius: 52 },
  { id: 'vite', name: 'Vite', radius: 46 },
  { id: 'nodejs', name: 'Node.js', radius: 50 },
  { id: 'nextjs', name: 'Next.js', radius: 52 },
  { id: 'git', name: 'Git', radius: 44 },
  { id: 'go', name: 'Go', radius: 42 },
  { id: 'threejs', name: 'Three.js', radius: 52 },
  { id: 'typescript', name: 'TypeScript', radius: 52 },
  { id: 'redux', name: 'Redux', radius: 48 },
  { id: 'express', name: 'Express', radius: 48 },
];

interface SphereState {
  id: string;
  name: string;
  baseRadius: number;
  currentRadius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  hoverScale: number;
  isHovered: boolean;
  isDragged: boolean;
}

// Crisp Vector Canvas Tech Logos
const drawTechIcon = (
  ctx: CanvasRenderingContext2D,
  id: string,
  x: number,
  y: number,
  size: number
) => {
  ctx.save();
  ctx.translate(x, y);

  switch (id) {
    case 'react': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = '#00d8ff';
      ctx.fill();

      ctx.strokeStyle = '#00d8ff';
      ctx.lineWidth = 1.4;
      for (let angle = 0; angle < Math.PI; angle += Math.PI / 3) {
        ctx.beginPath();
        ctx.ellipse(0, 0, s, s * 0.38, angle, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    }

    case 'javascript': {
      const s = size * 0.42;
      ctx.beginPath();
      ctx.roundRect(-s, -s, s * 2, s * 2, s * 0.25);
      ctx.fillStyle = '#f7df1e';
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.font = `900 ${Math.round(s * 1.05)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('JS', s * 0.8, s * 0.85);
      break;
    }

    case 'typescript': {
      const s = size * 0.42;
      ctx.beginPath();
      ctx.roundRect(-s, -s, s * 2, s * 2, s * 0.25);
      ctx.fillStyle = '#3178c6';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 1.0)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('TS', s * 0.8, s * 0.85);
      break;
    }

    case 'html5': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.moveTo(-s * 0.85, -s * 0.9);
      ctx.lineTo(s * 0.85, -s * 0.9);
      ctx.lineTo(s * 0.7, s * 0.65);
      ctx.lineTo(0, s * 0.95);
      ctx.lineTo(-s * 0.7, s * 0.65);
      ctx.closePath();
      ctx.fillStyle = '#e34f26';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(s * 0.65, -s * 0.75);
      ctx.lineTo(s * 0.52, s * 0.55);
      ctx.lineTo(0, s * 0.8);
      ctx.closePath();
      ctx.fillStyle = '#f06529';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 0.9)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('5', 0, 0);
      break;
    }

    case 'css3': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.moveTo(-s * 0.85, -s * 0.9);
      ctx.lineTo(s * 0.85, -s * 0.9);
      ctx.lineTo(s * 0.7, s * 0.65);
      ctx.lineTo(0, s * 0.95);
      ctx.lineTo(-s * 0.7, s * 0.65);
      ctx.closePath();
      ctx.fillStyle = '#1572b6';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(s * 0.65, -s * 0.75);
      ctx.lineTo(s * 0.52, s * 0.55);
      ctx.lineTo(0, s * 0.8);
      ctx.closePath();
      ctx.fillStyle = '#33a9dc';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 0.9)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('3', 0, 0);
      break;
    }

    case 'tailwind': {
      const s = size * 0.44;
      ctx.fillStyle = '#38bdf8';

      ctx.beginPath();
      ctx.moveTo(-s * 0.8, -s * 0.1);
      ctx.bezierCurveTo(-s * 0.6, -s * 0.7, -s * 0.1, -s * 0.7, 0.1 * s, -s * 0.2);
      ctx.bezierCurveTo(0.25 * s, 0.2 * s, 0.6 * s, 0.2 * s, 0.8 * s, -s * 0.1);
      ctx.bezierCurveTo(0.6 * s, 0.5 * s, 0.1 * s, 0.5 * s, -s * 0.1, 0.0);
      ctx.bezierCurveTo(-s * 0.25, -s * 0.4, -s * 0.6, -s * 0.4, -s * 0.8, -s * 0.1);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-s * 0.4, s * 0.35);
      ctx.bezierCurveTo(-s * 0.25, 0.0, 0.0, 0.0, 0.15 * s, s * 0.3);
      ctx.bezierCurveTo(0.25 * s, s * 0.5, 0.45 * s, s * 0.5, 0.55 * s, s * 0.35);
      ctx.bezierCurveTo(0.45 * s, s * 0.7, 0.15 * s, s * 0.7, 0.0, s * 0.45);
      ctx.bezierCurveTo(-s * 0.1, s * 0.2, -s * 0.3, s * 0.2, -s * 0.4, s * 0.35);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'nodejs': {
      const s = size * 0.44;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = Math.cos(angle) * s;
        const hy = Math.sin(angle) * s;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.fillStyle = '#339933';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 0.95)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', 0, 0);
      break;
    }

    case 'threejs': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.9, s * 0.7);
      ctx.lineTo(-s * 0.9, s * 0.7);
      ctx.closePath();
      ctx.fillStyle = '#0f172a';
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s * 0.2);
      ctx.lineTo(-s * 0.9, s * 0.7);
      ctx.moveTo(0, s * 0.2);
      ctx.lineTo(s * 0.9, s * 0.7);
      ctx.stroke();
      break;
    }

    case 'vite': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.85, -s * 0.3);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.85, -s * 0.3);
      ctx.closePath();
      ctx.fillStyle = '#646cff';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(s * 0.1, -s * 0.7);
      ctx.lineTo(-s * 0.4, 0);
      ctx.lineTo(0, 0);
      ctx.lineTo(-s * 0.2, s * 0.7);
      ctx.lineTo(s * 0.4, -0.05);
      ctx.lineTo(0, -0.05);
      ctx.closePath();
      ctx.fillStyle = '#ffea83';
      ctx.fill();
      break;
    }

    case 'git': {
      const s = size * 0.42;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-s, 0);
      ctx.closePath();
      ctx.fillStyle = '#f05032';
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.3;
      ctx.fillStyle = '#ffffff';

      ctx.beginPath();
      ctx.moveTo(-s * 0.2, s * 0.3);
      ctx.lineTo(s * 0.3, -s * 0.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-s * 0.2, s * 0.3, s * 0.18, 0, Math.PI * 2);
      ctx.arc(s * 0.3, -s * 0.2, s * 0.18, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'go': {
      const s = size * 0.42;
      ctx.beginPath();
      ctx.roundRect(-s, -s * 0.75, s * 2, s * 1.5, s * 0.3);
      ctx.fillStyle = '#00add8';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 0.85)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GO', 0, 0);
      break;
    }

    case 'nextjs': {
      const s = size * 0.44;
      ctx.beginPath();
      ctx.arc(0, 0, s, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(s * 1.0)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', 0, 0);
      break;
    }

    case 'redux': {
      const s = size * 0.42;
      ctx.fillStyle = '#764abc';
      ctx.beginPath();
      ctx.arc(-s * 0.35, 0, s * 0.35, 0, Math.PI * 2);
      ctx.arc(s * 0.35, 0, s * 0.35, 0, Math.PI * 2);
      ctx.arc(0, -s * 0.35, s * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, -s * 0.1, s * 0.18, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'express': {
      const s = size * 0.42;
      ctx.beginPath();
      ctx.roundRect(-s, -s * 0.75, s * 2, s * 1.5, s * 0.3);
      ctx.fillStyle = '#1e293b';
      ctx.fill();

      ctx.fillStyle = '#f8fafc';
      ctx.font = `900 ${Math.round(s * 0.85)}px "Inter", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ex', 0, 0);
      break;
    }

    default:
      break;
  }

  ctx.restore();
};

export const TechSpheresGroup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spheresRef = useRef<SphereState[]>([]);
  const isVisibleRef = useRef(true);
  const mouseRef = useRef<{
    x: number;
    y: number;
    isDown: boolean;
    isActive: boolean;
    draggedId: string | null;
  }>({
    x: -1000,
    y: -1000,
    isDown: false,
    isActive: false,
    draggedId: null,
  });

  const initSpheres = useCallback((width: number, height: number) => {
    const cols = 5;
    const rows = 3;
    const cellW = (width - 120) / cols;
    const cellH = (height - 80) / rows;

    spheresRef.current = TECH_CONFIG.map((item, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);

      const targetX = 60 + col * cellW + cellW * 0.5 + (Math.random() - 0.5) * 26;
      const targetY = 40 + row * cellH + cellH * 0.5 + (Math.random() - 0.5) * 20;

      return {
        id: item.id,
        name: item.name,
        baseRadius: item.radius,
        currentRadius: item.radius,
        x: Math.max(item.radius + 15, Math.min(width - item.radius - 15, targetX)),
        y: Math.max(item.radius + 15, Math.min(height - item.radius - 15, targetY)),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        phase: idx * 0.75 + Math.random(),
        hoverScale: 1.0,
        isHovered: false,
        isDragged: false,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const updateSize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      // Cap DPR to 1.5 for high performance on 4K/Retina displays
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (spheresRef.current.length === 0) {
        initSpheres(width, height);
      } else {
        spheresRef.current.forEach((s) => {
          s.x = Math.max(s.baseRadius + 10, Math.min(width - s.baseRadius - 10, s.x));
          s.y = Math.max(s.baseRadius + 10, Math.min(height - s.baseRadius - 10, s.y));
        });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // Pause rendering when section is out of viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    const render = (time: number) => {
      if (!isVisibleRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const spheres = spheresRef.current;

      // 1. Update Physics
      for (let i = 0; i < spheres.length; i++) {
        const s = spheres[i];
        const isDraggingThis = mouse.draggedId === s.id;
        s.isDragged = isDraggingThis;

        const targetScale = s.isHovered || s.isDragged ? 1.15 : 1.0;
        s.hoverScale += (targetScale - s.hoverScale) * 0.15;
        s.currentRadius = s.baseRadius * s.hoverScale;

        if (isDraggingThis) {
          const dragDx = mouse.x - s.x;
          const dragDy = mouse.y - s.y;
          s.vx = dragDx * 0.35;
          s.vy = dragDy * 0.35;
          s.x = mouse.x;
          s.y = mouse.y;
        } else {
          s.vx += Math.sin(time * 0.0012 + s.phase) * 0.03;
          s.vy += Math.cos(time * 0.001 + s.phase) * 0.03;

          if (mouse.isActive && !mouse.isDown) {
            const dx = s.x - mouse.x;
            const dy = s.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = s.currentRadius + 85;

            if (dist < repelRadius && dist > 1) {
              const force = ((repelRadius - dist) / repelRadius) * 2.2;
              s.vx += (dx / dist) * force;
              s.vy += (dy / dist) * force;
            }
          }

          s.vx *= 0.95;
          s.vy *= 0.95;
          s.x += s.vx;
          s.y += s.vy;
        }

        const pad = 10;
        if (s.x - s.currentRadius < pad) {
          s.x = pad + s.currentRadius;
          s.vx = Math.abs(s.vx) * 0.75;
        } else if (s.x + s.currentRadius > width - pad) {
          s.x = width - pad - s.currentRadius;
          s.vx = -Math.abs(s.vx) * 0.75;
        }

        if (s.y - s.currentRadius < pad) {
          s.y = pad + s.currentRadius;
          s.vy = Math.abs(s.vy) * 0.75;
        } else if (s.y + s.currentRadius > height - pad) {
          s.y = height - pad - s.currentRadius;
          s.vy = -Math.abs(s.vy) * 0.75;
        }
      }

      // 2. Inter-Sphere Elastic Collisions
      for (let i = 0; i < spheres.length; i++) {
        const s1 = spheres[i];
        for (let j = i + 1; j < spheres.length; j++) {
          const s2 = spheres[j];
          const dx = s2.x - s1.x;
          const dy = s2.y - s1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = s1.currentRadius + s2.currentRadius + 8;

          if (dist < minDist && dist > 0.001) {
            const overlap = (minDist - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;

            if (!s1.isDragged) {
              s1.x -= nx * overlap * 0.45;
              s1.y -= ny * overlap * 0.45;
              s1.vx -= nx * 0.25;
              s1.vy -= ny * 0.25;
            }
            if (!s2.isDragged) {
              s2.x += nx * overlap * 0.45;
              s2.y += ny * overlap * 0.45;
              s2.vx += nx * 0.25;
              s2.vy += ny * 0.25;
            }
          }
        }
      }

      // 3. Render Spheres (Glossy Porcelain White with Official Vector Logos)
      for (let i = 0; i < spheres.length; i++) {
        const s = spheres[i];
        const r = s.currentRadius;
        const isHovered = s.isHovered || s.isDragged;

        ctx.save();

        // A. Lightweight Drop Shadow
        ctx.beginPath();
        ctx.ellipse(s.x, s.y + r * 0.78, r * 0.85, r * 0.22, 0, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? 'rgba(168, 85, 247, 0.25)' : 'rgba(0, 0, 0, 0.35)';
        ctx.fill();

        // B. 3D Radial Sphere Shading
        const lightX = s.x - r * 0.32;
        const lightY = s.y - r * 0.32;
        const grad = ctx.createRadialGradient(lightX, lightY, r * 0.05, s.x, s.y, r);

        if (isHovered) {
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.2, '#faf5ff');
          grad.addColorStop(0.65, '#ede9fe');
          grad.addColorStop(0.9, '#ddd6fe');
          grad.addColorStop(1, '#a855f7');
        } else {
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.22, '#f8fafc');
          grad.addColorStop(0.6, '#e2e8f0');
          grad.addColorStop(0.85, '#cbd5e1');
          grad.addColorStop(1, '#94a3b8');
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // C. Outer Silhouette Rim Stroke
        ctx.strokeStyle = isHovered ? 'rgba(168, 85, 247, 0.85)' : 'rgba(100, 116, 139, 0.35)';
        ctx.lineWidth = isHovered ? 2.2 : 1.0;
        ctx.stroke();

        // D. Top-Left Glossy Specular Arc Highlight
        ctx.beginPath();
        ctx.ellipse(s.x - r * 0.28, s.y - r * 0.3, r * 0.36, r * 0.16, -Math.PI / 4, 0, Math.PI * 2);
        const specGrad = ctx.createLinearGradient(
          s.x - r * 0.45,
          s.y - r * 0.45,
          s.x - r * 0.15,
          s.y - r * 0.15
        );
        specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        specGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
        ctx.fillStyle = specGrad;
        ctx.fill();

        // E. Equatorial Accent Orbit Ring
        ctx.beginPath();
        ctx.ellipse(s.x, s.y, r * 1.14, r * 0.32, Math.PI / 6, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? 'rgba(168, 85, 247, 0.65)' : 'rgba(71, 85, 105, 0.25)';
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // F. Render Official Tech Icon (Upper Center)
        const iconY = s.y - r * 0.22;
        const iconSize = r * 0.82;
        drawTechIcon(ctx, s.id, s.x, iconY, iconSize);

        // G. Render Bold Dark Charcoal Tech Label (Lower Center)
        const textY = s.y + r * 0.44;
        ctx.fillStyle = isHovered ? '#581c87' : '#0f172a';
        const fontSize = Math.max(10, Math.round(r * 0.26));
        ctx.font = `800 ${fontSize}px "Inter", system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(s.name, s.x, textY);

        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [initSpheres]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.isActive = true;

    let hasHover = false;
    for (const s of spheresRef.current) {
      const dx = s.x - x;
      const dy = s.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      s.isHovered = dist < s.currentRadius + 4;
      if (s.isHovered) hasHover = true;
    }

    canvas.style.cursor = mouseRef.current.draggedId
      ? 'grabbing'
      : hasHover
      ? 'grab'
      : 'default';
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.isDown = true;

    for (const s of spheresRef.current) {
      const dx = s.x - x;
      const dy = s.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < s.currentRadius + 6) {
        mouseRef.current.draggedId = s.id;
        canvas.style.cursor = 'grabbing';
        break;
      }
    }
  };

  const handlePointerUp = () => {
    mouseRef.current.isDown = false;
    mouseRef.current.draggedId = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'default';
    }
  };

  const handlePointerLeave = () => {
    mouseRef.current.isActive = false;
    mouseRef.current.isDown = false;
    mouseRef.current.draggedId = null;
    spheresRef.current.forEach((s) => {
      s.isHovered = false;
      s.isDragged = false;
    });
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'default';
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center select-none touch-none"
    >
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        className="w-full h-full block"
      />
    </div>
  );
};

export default TechSpheresGroup;
