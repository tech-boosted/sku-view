import React, { useRef, useEffect } from 'react';

import {
  Chart, DoughnutController, ArcElement, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

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
            li.style.margin = "0.25rem";
            // Button element
            const button = document.createElement('button');
            button.classList.add('is-flex','is-align-items-center');
            button.style.backgroundColor = "white";
            button.style.borderWidth = "1px";
            button.style.borderRadius = "0.25rem";
            button.style.borderColor = "#e2e8f0";
            button.style.color = "#64748b";
            button.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.toggleDataVisibility(item.index, !item.index);
              c.update();
            };
            // Color box
            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = "0.5rem";
            box.style.height = "0.5rem";
            box.style.backgroundColor = item.fillStyle;
            box.style.borderRadius = "0.125rem";
            box.style.marginRight = "0.25rem";
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
    <div className="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div className="px-5 pt-2 pb-6">
        <ul ref={legend} className="is-flex flex-wrap is-justify-content-center m-1"></ul>
      </div>
    </div>
  );
}

export default DoughnutChart;