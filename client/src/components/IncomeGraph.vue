<!--https://vue-chartjs.org/guide/#introduction found tutorial here-->
<template>
    <div class="small">
        <pie-chart :chart-data="datacollection"></pie-chart>
        <label for="description-entry">Enter a transaction</label><input type="text" id="description-entry"><br>
        <label for="amount-entry">Transaction amount</label><input type="number" id="amount-entry"><br>
        <button @click="fillData()">Add</button>
    </div>
</template>

<script>
    import PieChart from './PieChart.js'

    export default {
        components: {
            PieChart: PieChart
        },
        data () {
            return {
                transactions: null
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.transactions = {
                    labels: ['Income'],
                    datasets: [
                        {
                            label: 'Income Pie Chart',
                            backgroundColor: '#f77000',
                            data: [70, 10, 20]
                        }
                    ]
                }
            },
            //http://html5doctor.com/introducing-web-sql-databases/
            //http://www.sqlitetutorial.net/sqlite-nodejs/query/
            // https://scotch.io/tutorials/building-a-mini-invoicing-app-with-vue-and-node-database-and-api
            // https://vue-chartjs.org/guide/#chart-with-api-data
            getTableData(){
                this.$transactionService.getAll().then(data =>{
                    this.transactions = data
                })
                // const sqlite3 = require('sqlite3').verbose();
                // //let db = openDatabase('development.db', '1.0', 'my db', 2 * 1024 * 1024);
                // let db = new sqlite3.Database('development.db');
                //
                // let sql = `SELECT * FROM Finances`;
                //
                // db.all(sql, [], (err, rows) =>{
                //     if (err){
                //         throw err;
                //     }
                //     rows.forEach((row) =>{
                //         console.log(row.amount)
                //     })
                // })


                // db.transaction(function (tx) {
                //     tx.executeSql('SELECT * FROM Finances', [], function (tx, results) {
                //         var allAmounts = [];
                //         var len = results.rows.length, i;
                //         for (i = 0; i < len; i++){
                //             var amount = results.rows.item(i).amount;
                //             allAmounts.push(amount)
                //         }
                //         return allAmounts
                //     })
                // });
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>