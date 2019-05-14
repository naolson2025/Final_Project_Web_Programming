<template>
    <div class="header">
        <div class="jumbotron">
            <h1 class="display-4" id="title">Instructions</h1>
            <p class="lead">This app helps users organize their finances. Enter a description and amount to add to the charts</p>
            <p>Click the 'Clear Charts' button to delete all data and start from scratch</p>
            <p>To delete one item type the description and click delete</p>
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
</style>