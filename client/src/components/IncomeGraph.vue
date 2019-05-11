<!--https://vue-chartjs.org/guide/#introduction found tutorial here-->
<!-- No template for Chartsjs they cause problems-->

<script>
    import { Pie, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins;

    export default {
        // Pie is provided by chartsjs
        extends: Pie,
        // mixins and reactive prop allow chart to update when data is changed
        mixins: [ reactiveProp ],
        props: {
            // provided by mixins
          options: Object
        },
        mounted () {
            this.renderChart(this.chartData, this.options)
        }
    }
</script>

<style>

</style>