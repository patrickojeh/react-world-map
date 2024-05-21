import worldMapChart from "./script.js";

const options = {
  event: 'click',
  label: 'Total Candidate',
  allowZoom: true,
  data: [
    {
      "name": "Nigeria",
      "count": 149
    },
    {
      "name": "Canada",
      "count": 8,
      "label": "Total Candidate"
    },
    {
      "name": "United States",
      "count": 23,
      "label": "Total Candidate"
    },
    {
      "name": "Russia",
      "count": 16,
      "label": "Total Candidate"
    }
  ]
}

worldMapChart(options);