<template>
    <div class="header">
        <div class="jumbotron">
            <h1 class="display-4" id="title">Instructions</h1>
            <p class="lead">This app helps users organize their finances. Enter a description and amount to add to the charts</p>

            <div class="clear-charts-button">
                <button v-on:click="clearCharts">Clear Charts</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .jumbotron{
        text-align: center;
        padding-bottom: 32px;
    }
    .clear-charts-button{
        text-align: left;
    }
</style>