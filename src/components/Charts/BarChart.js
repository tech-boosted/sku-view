import React, { useRef, useEffect } from 'react';

import {
  Chart, BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend,
} from 'chart.js';
import 'chartjs-adapter-moment';

Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend);

function BarChart({
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
      type: 'bar',
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            border: {
              display: false,
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
            li.style.marginRight = "1.rem";
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
            box.style.borderColor = item.fillStyle;
            box.style.pointerEvents = 'none';
            // Label
            const labelContainer = document.createElement('span');
            labelContainer.style.display = 'flex';
            labelContainer.style.alignItems = 'center';
            const value = document.createElement('span');
            value.style.color = "#1e293b";
            value.style.fontSize = "1.875rem;";
            value.style.lineHeight = "2.25rem";
            value.style.fontWeight = "bold";
            value.style.marginRight = "0.5rem";
            value.style.pointerEvents = 'none';
            const label = document.createElement('span');
            label.style.color = "#64748b";
            label.style.fontSize = "0.875rem";
            label.style.lineHeight = "1.25rem";
            const theValue = c.data.datasets[item.datasetIndex].data.reduce((a, b) => a + b, 0);
            const valueText = document.createTextNode("$85K");
            const labelText = document.createTextNode(item.text);
            value.appendChild(valueText);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(labelContainer);
            labelContainer.appendChild(value);
            labelContainer.appendChild(label);
            ul.appendChild(li);
          });
        },
      }],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        {/* <ul ref={legend} className="is-flex flex-wrap"></ul> */}
      </div>
      <div className="is-flex-grow-1">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart;
