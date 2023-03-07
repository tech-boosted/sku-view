import React, { useRef, useEffect } from 'react';

import {
  Chart, DoughnutController, ArcElement, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { tailwindConfig } from '../utils/Utils';

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({
  data,
  width,
  height
}) {

  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutout: '80%',
        layout: {
          padding: 24,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [{
        id: 'htmlLegend',
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul) return;
          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          // Reuse the built-in legendItems generator
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.forEach((item) => {
            const li = document.createElement('li');
            li.style.margin = "";
            // Button element
            const button = document.createElement('button');
            button.classList.add('btn-xs');
            button.style.backgroundColor = "";
            button.style.borderWidth = "";
            button.style.borderColor = "";
            button.style.color = "";
            button.style.boxShadow = "";
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.toggleDataVisibility(item.index, !item.index);
              c.update();
            };
            // Color box
            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = "";
            box.style.height = "";
            box.style.backgroundColor = item.fillStyle;
            box.style.borderRadius = "";
            box.style.marginRight = "";
            box.style.pointerEvents = 'none';
            // Label
            const label = document.createElement('span');
            label.style.display = 'flex';
            label.style.alignItems = 'center';
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        },
      }],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grow flex flex-col justify-center">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div className="px-5 pt-2 pb-6">
        <ul ref={legend} className="flex flex-wrap justify-center -m-1"></ul>
      </div>
    </div>
  );
}

export default DoughnutChart;