<script>
import {Radar, mixins} from 'vue-chartjs';

export default {
  mixins: [Radar, mixins.reactiveData],
  props: {
    result_data: {
      type: Array,
      required: true
    },
  },
  watch: {
    result_data: function() {
      this._renderChart();
    }
  },
  mounted () {
    this._renderChart();
  },
  methods: {
    _renderChart() {
      this.renderChart({
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [
          {
            label: '',
            backgroundColor: 'rgba(121, 219, 251, .6)',
            borderWidth: 0,
            borderColor: 'rgba(0, 0, 0, 0)',
            radius: 0,
            data: this.result_data
          },
        ]
      },
      {
        responsive: false,
        maintainAspectRatio: true,
        spanGaps: false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        animation: {
          duration: 600,
          easing: 'linear'
        },
        scale: {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1,
            beginAtZero: true,
          },
          pointLabels: {
            fontSize: 25
          }
        }
      });
    },
  },
};
</script>
