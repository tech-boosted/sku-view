import React, { useRef, useEffect } from 'react';

import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, CategoryScale
} from 'chart.js';
import 'chartjs-adapter-moment';

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, CategoryScale);

function LineChart({
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
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            grid: {
              beginAtZero: true,
            },
            ticks: {
              maxTicksLimit: 5,
            //   callback: (value) => formatValue(value),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
              displayFormats: {
                month: 'MMM YY',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
            //   label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
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
            items.slice(0, 2).forEach((item) => {
              const li = document.createElement('li');
              li.style.marginLeft = "0.75rem";
              // Button element
              const button = document.createElement('button');
              button.style.display = 'inline-flex';
              button.style.alignItems = 'center';
              button.style.opacity = item.hidden ? '.3' : '';
              button.onclick = () => {
                c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
                c.update();
              };
              // Color box
              const box = document.createElement('span');
              box.style.display = 'block';
              box.style.width = "0.75rem";
              box.style.height = "0.75rem";
              box.style.borderRadius = "9999px";
              box.style.marginRight = "0.5rem";
              box.style.borderWidth = '3px';
              box.style.borderColor = c.data.datasets[item.datasetIndex].borderColor;
              box.style.pointerEvents = 'none';
              // Label
              const label = document.createElement('span');
              label.style.color = "#64748b";
              label.style.fontSize = "0.875rem";
              label.style.lineHeight = "1.25rem";
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
{/*       <div className="px-5 py-3">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-end">
          <div className="is-flex is-align-items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">$1,482</div>
            <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-22%</div>
          </div>
          <div className="is-flex-grow-1 ml-2 mb-1">
            <ul ref={legend} className="is-flex is-flex-wrap-wrap justify-end"></ul>
          </div>
        </div>
      </div> */}
      {/* Chart built with Chart.js 3 */}
      <div className="is-flex-grow-1">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default LineChart;